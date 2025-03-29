import express from 'express';
import { createEvent } from '../services/googleCalendar';

const router = express.Router();

router.post('/book', async (req, res) => {
    const { summary, startTime, endTime } = req.body;
    const event = await createEvent(summary, startTime, endTime);
    res.json(event.data);
});

export default router;
