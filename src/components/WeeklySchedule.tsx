import React from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import type { CourtAppointment } from '../types';
import { Calendar, MapPin, Send } from 'lucide-react';
import { sendWhatsAppReminder } from '../utils/api';
import toast from 'react-hot-toast';

interface WeeklyScheduleProps {
  appointments: CourtAppointment[];
  currentDate: Date;
}

export function WeeklySchedule({ appointments, currentDate }: WeeklyScheduleProps) {
  const startOfCurrentWeek = startOfWeek(currentDate);
  const weekDays = [...Array(7)].map((_, i) => addDays(startOfCurrentWeek, i));

  const handleSendReminder = async () => {
    try {
      await sendWhatsAppReminder(appointments);
      toast.success('Schedule sent to WhatsApp!');
    } catch (error) {
      toast.error('Failed to send WhatsApp reminder');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Weekly Schedule</h2>
        </div>
        
        <button
          onClick={handleSendReminder}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send to WhatsApp
        </button>
      </div>

      <div className="space-y-6">
        {weekDays.map((day) => {
          const dayAppointments = appointments.filter((apt) =>
            isSameDay(new Date(apt.date), day)
          );

          return (
            <div key={day.toISOString()} className="border-b pb-4 last:border-b-0">
              <h3 className="text-md font-medium text-gray-900 mb-3">
                {format(day, 'EEEE, MMMM d')}
              </h3>
              
              {dayAppointments.length === 0 ? (
                <p className="text-gray-500 text-sm">No appointments scheduled</p>
              ) : (
                <div className="space-y-4">
                  {dayAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-indigo-600 font-medium">
                          {appointment.caseTitle}
                        </h4>
                        <span className="text-sm text-gray-600">
                          {appointment.time}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        Case #{appointment.caseNumber}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {appointment.courtName} - {appointment.location}
                      </div>
                      
                      {appointment.description && (
                        <p className="text-sm text-gray-600 mt-2">
                          {appointment.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}