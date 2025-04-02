const Razorpay = require('razorpay');
const crypto = require('crypto');
const Subscription = require('../models/Subscription');
const User = require('../models/User');

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { amount, plan } = req.body;
    const userId = req.user._id; // Assuming you have user info from auth middleware

    const options = {
      amount: amount, // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: `order_${Date.now()}`,
      payment_capture: 1,
      notes: {
        userId: userId.toString(),
        plan: plan
      }
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating order',
      error: error.message
    });
  }
};

// Verify payment
const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      razorpay_order_notes
    } = req.body;

    // Verify signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Get order details to access notes
      const order = await razorpay.orders.fetch(razorpay_order_id);
      const { userId, plan } = order.notes;

      // Calculate subscription end date (30 days from now)
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 30);

      // Create subscription
      const subscription = await Subscription.create({
        userId,
        plan,
        paymentId: razorpay_payment_id,
        amount: order.amount / 100, // Convert from paise to rupees
        endDate,
        status: 'active'
      });

      // Update user's subscription status
      await User.findByIdAndUpdate(userId, {
        subscriptionId: subscription._id,
        plan: plan
      });

      res.status(200).json({
        success: true,
        message: 'Payment verified and subscription created successfully',
        data: subscription
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid payment signature'
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      success: false,
      message: 'Error verifying payment',
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  verifyPayment
}; 