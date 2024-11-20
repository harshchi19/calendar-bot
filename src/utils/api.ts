import axios from 'axios';
import type { CourtAppointment } from '../types';

const API_URL = 'http://localhost:3000/api';

export const sendWhatsAppReminder = async (appointments: CourtAppointment[]) => {
  try {
    const response = await axios.post(`${API_URL}/send-reminder`, { appointments });
    return response.data;
  } catch (error) {
    console.error('Error sending reminder:', error);
    throw new Error('Failed to send WhatsApp reminder');
  }
};