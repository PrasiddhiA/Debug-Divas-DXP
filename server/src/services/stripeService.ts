import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-08-16' });

export const createPaymentIntent = async (amount: number, currency: string) => {
    return await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method_types: ['card'],
    });
};
