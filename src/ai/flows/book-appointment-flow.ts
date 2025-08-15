'use server';
/**
 * @fileOverview A flow for booking appointments.
 *
 * - bookAppointment - A function that handles the appointment booking process.
 * - BookAppointmentInput - The input type for the bookAppointment function.
 * - BookAppointmentOutput - The return type for the bookAppointment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { db } from '@/lib/firebase';

const BookAppointmentInputSchema = z.object({
  name: z.string().describe('The name of the patient.'),
  phone: z.string().describe('The phone number of the patient.'),
  dob: z.string().describe("The patient's date of birth."),
  date: z.string().describe('The preferred date for the appointment.'),
  department: z.string().describe('The department for the appointment.'),
  doctor: z.string().describe('The selected doctor for the appointment.'),
  branch: z.string().describe('The hospital branch for the appointment.'),
  notes: z.string().optional().describe('Any additional notes from the patient.'),
});

export type BookAppointmentInput = z.infer<typeof BookAppointmentInputSchema>;

const BookAppointmentOutputSchema = z.object({
  success: z.boolean(),
  message: z.string().describe("A friendly confirmation message for the user, acknowledging their name and the appointment details they provided."),
});

export type BookAppointmentOutput = z.infer<typeof BookAppointmentOutputSchema>;

const appointmentPrompt = ai.definePrompt({
  name: 'appointmentPrompt',
  input: { schema: BookAppointmentInputSchema },
  output: { schema: BookAppointmentOutputSchema },
  prompt: `A patient is booking an appointment. Here are the details:
- Name: {{name}}
- Phone: {{phone}}
- Date of Birth: {{dob}}
- Department: {{department}}
- Doctor: {{doctor}}
- Appointment Date: {{date}}
- Branch: {{branch}}
- Notes: {{notes}}

Acknowledge the booking by creating a friendly confirmation message. Address the user by name ({{name}}). Confirm that their request for an appointment with {{doctor}} on {{date}} at the {{branch}} has been received. Mention that they will receive an SMS and email with the appointment details shortly. The operation is always successful.`,
});

const bookAppointmentFlow = ai.defineFlow(
  {
    name: 'bookAppointmentFlow',
    inputSchema: BookAppointmentInputSchema,
    outputSchema: BookAppointmentOutputSchema,
  },
  async (input) => {
    console.log('Saving appointment to Firestore with data:', input);

    // Save to Firestore
    await db.collection('bookings').add({
      ...input,
      createdAt: new Date().toISOString(),
      status: 'pending', // Default status
    });

    const { output } = await appointmentPrompt(input);
    return output || { success: true, message: `Thank you, ${input.name}. Your appointment request for ${input.date} has been received. You will get a confirmation email/SMS shortly.` };
  }
);


export async function bookAppointment(
  input: BookAppointmentInput
): Promise<BookAppointmentOutput> {
  return await bookAppointmentFlow(input);
}
