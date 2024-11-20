import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  appointments: Date[];
}

export function Calendar({ selectedDate, onSelect, appointments }: CalendarProps) {
  const appointmentDates = appointments.map(date => new Date(date));

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Schedule Calendar</h2>
      </div>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        modifiers={{
          hasAppointment: appointmentDates,
        }}
        modifiersStyles={{
          hasAppointment: {
            backgroundColor: '#818cf8',
            color: 'white',
          },
        }}
        className="border rounded-md p-3"
        classNames={{
          day_selected: 'bg-indigo-600 text-white hover:bg-indigo-700',
          day_today: 'font-bold text-indigo-600',
        }}
        footer={
          selectedDate ? (
            <p className="mt-4 text-sm text-gray-600">
              Selected date: {format(selectedDate, 'PPP')}
            </p>
          ) : (
            <p className="mt-4 text-sm text-gray-600">Please select a date</p>
          )
        }
      />
    </div>
  );
}