import express from 'express';
import { db } from '../firebase';

const router = express.Router();

router.post('/send-message', async (req, res) => {
    const { userId, message } = req.body;
    await db.collection('messages').add({ userId, message, timestamp: new Date() });
    res.json({ message: 'Message sent' });
});

router.get('/messages', async (_, res) => {
    const snapshot = await db.collection('messages').orderBy('timestamp').get();
    const messages = snapshot.docs.map(doc => doc.data());
    res.json(messages);
});

export default router;
