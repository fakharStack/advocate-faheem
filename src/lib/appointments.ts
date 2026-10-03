export const CONSULTATIONS_KEY = "haz-consultation-inquiries";

export type ConsultationInquiry = {
  id: string;
  name: string;
  phone: string;
  category: string;
  chamber: string;
  details: string;
  createdAt: string;
};

export function readConsultations(): ConsultationInquiry[] {
  try {
    const saved = window.localStorage.getItem(CONSULTATIONS_KEY);
    return saved ? (JSON.parse(saved) as ConsultationInquiry[]) : [];
  } catch {
    return [];
  }
}

export function saveConsultation(inquiry: ConsultationInquiry) {
  const list = readConsultations();
  window.localStorage.setItem(CONSULTATIONS_KEY, JSON.stringify([inquiry, ...list]));
}

// Retain legacy interface types so any external references remain type-safe
export const appointmentStatuses = ["Recorded", "Reviewed"] as const;
export type AppointmentStatus = (typeof appointmentStatuses)[number];

export function readAppointments() {
  return readConsultations();
}

export function generateBookingId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let value = "";
  const values = new Uint32Array(6);
  window.crypto.getRandomValues(values);
  values.forEach((number) => {
    value += chars[number % chars.length];
  });
  return `HAZ-${value}`;
}
