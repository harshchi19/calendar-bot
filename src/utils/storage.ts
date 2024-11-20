import type { CourtAppointment } from '../types';

const STORAGE_KEY = 'lawyer_appointments';

export const saveAppointments = (appointments: CourtAppointment[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
};

export const loadAppointments = (): CourtAppointment[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  const appointments = JSON.parse(stored);
  return appointments.map((apt: any) => ({
    ...apt,
    date: new Date(apt.date),
  }));
};