import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export const createEvent = async (summary: string, startTime: string, endTime: string) => {
    return await calendar.events.insert({
        calendarId: 'primary',
        requestBody: {
            summary,
            start: { dateTime: startTime },
            end: { dateTime: endTime },
        },
    });
};
