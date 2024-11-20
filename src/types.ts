export interface CourtAppointment {
  id: string;
  date: Date;
  courtName: string;
  location: string;
  caseNumber: string;
  caseTitle: string;
  description: string;
  time: string;
}

export interface AppointmentFormData {
  date: Date;
  courtName: string;
  location: string;
  caseNumber: string;
  caseTitle: string;
  description: string;
  time: string;
}