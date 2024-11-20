import express from 'express';
import cors from 'cors';
import twilio from 'twilio';
import { format } from 'date-fns';

const app = express();
app.use(cors());
app.use(express.json());

const TWILIO_ACCOUNT_SID = 'AC5f87de08726346312fb6a242fb0e5b38';
const TWILIO_AUTH_TOKEN = '4e074ff87bbeeaf4332fd0c571edbf09';
const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+15156746683';
const USER_PHONE_NUMBER = 'whatsapp:+919321694382';

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

app.post('/api/send-reminder', async (req, res) => {
  try {
    const { appointments } = req.body;
    
    if (!appointments || appointments.length === 0) {
      return res.status(400).json({ error: 'No appointments provided' });
    }

    const message = appointments.map(apt => {
      const date = format(new Date(apt.date), 'MMMM d, yyyy');
      return `📅 ${date} at ${apt.time}\n📍 ${apt.courtName}\n📌 Case: ${apt.caseTitle}\n#️⃣ ${apt.caseNumber}\n`;
    }).join('\n');

    const twilioMessage = await client.messages.create({
      body: `🏛 Your upcoming court appointments:\n\n${message}`,
      from: TWILIO_WHATSAPP_NUMBER,
      to: USER_PHONE_NUMBER
    });

    res.json({ success: true, messageId: twilioMessage.sid });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ error: 'Failed to send WhatsApp message' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});