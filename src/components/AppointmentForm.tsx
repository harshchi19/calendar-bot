import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { AppointmentFormData } from '../types';
import { Clock, MapPin, Scale } from 'lucide-react';

const schema = z.object({
  date: z.date(),
  courtName: z.string().min(1, 'Court name is required'),
  location: z.string().min(1, 'Location is required'),
  caseNumber: z.string().min(1, 'Case number is required'),
  caseTitle: z.string().min(1, 'Case title is required'),
  description: z.string(),
  time: z.string().min(1, 'Time is required'),
});

interface AppointmentFormProps {
  onSubmit: (data: AppointmentFormData) => void;
  selectedDate: Date;
}

export function AppointmentForm({ onSubmit, selectedDate }: AppointmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: selectedDate,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Scale className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Court Appointment Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Court Name</label>
          <input
            {...register('courtName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter court name"
          />
          {errors.courtName && (
            <p className="mt-1 text-sm text-red-600">{errors.courtName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Location
            </div>
          </label>
          <input
            {...register('location')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter court location"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Case Number</label>
          <input
            {...register('caseNumber')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter case number"
          />
          {errors.caseNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.caseNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Time
            </div>
          </label>
          <input
            type="time"
            {...register('time')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Case Title</label>
          <input
            {...register('caseTitle')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter case title"
          />
          {errors.caseTitle && (
            <p className="mt-1 text-sm text-red-600">{errors.caseTitle.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description')}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter case details or notes"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Schedule Appointment
        </button>
      </div>
    </form>
  );
}