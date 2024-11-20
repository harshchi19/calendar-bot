import React, { useState, useEffect } from 'react';
import { Calendar } from './components/Calendar';
import { AppointmentForm } from './components/AppointmentForm';
import { WeeklySchedule } from './components/WeeklySchedule';
import type { AppointmentFormData, CourtAppointment } from './types';
import { Gavel } from 'lucide-react';
import { saveAppointments, loadAppointments } from './utils/storage';
import { Toaster } from 'react-hot-toast';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [appointments, setAppointments] = useState<CourtAppointment[]>([]);

  useEffect(() => {
    const savedAppointments = loadAppointments();
    setAppointments(savedAppointments);
  }, []);

  const handleAppointmentSubmit = (data: AppointmentFormData) => {
    const newAppointment: CourtAppointment = {
      id: crypto.randomUUID(),
      ...data,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    saveAppointments(updatedAppointments);
    setSelectedDate(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <header className="bg-primary-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Gavel className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Legal Schedule Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Calendar
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
              appointments={appointments.map(apt => apt.date)}
            />
          </div>

          <div className="lg:col-span-8 space-y-8">
            {selectedDate ? (
              <AppointmentForm
                onSubmit={handleAppointmentSubmit}
                selectedDate={selectedDate}
              />
            ) : (
              <WeeklySchedule
                appointments={appointments}
                currentDate={new Date()}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;