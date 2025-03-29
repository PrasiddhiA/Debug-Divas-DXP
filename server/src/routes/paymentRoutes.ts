import express from 'express';
import { createPaymentIntent } from '../services/stripeService';

const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount, currency } = req.body;
        const paymentIntent = await createPaymentIntent(amount, currency);
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: 'Payment error' });
    }
});

export default router;
