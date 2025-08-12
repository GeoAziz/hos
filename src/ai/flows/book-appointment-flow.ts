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
<<<<<<< HEAD
import { db } from '@/lib/firebase';
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873

const BookAppointmentInputSchema = z.object({
  name: z.string().describe('The name of the patient.'),
  phone: z.string().describe('The phone number of the patient.'),
  date: z.string().describe('The preferred date for the appointment.'),
  department: z.string().describe('The department for the appointment.'),
  branch: z.string().describe('The hospital branch for the appointment.'),
  notes: z.string().optional().describe('Any additional notes from the patient.'),
});

export type BookAppointmentInput = z.infer<typeof BookAppointmentInputSchema>;

const BookAppointmentOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type BookAppointmentOutput = z.infer<typeof BookAppointmentOutputSchema>;

const appointmentPrompt = ai.definePrompt({
  name: 'appointmentPrompt',
  input: { schema: BookAppointmentInputSchema },
  output: { schema: BookAppointmentOutputSchema },
  prompt: `A patient is booking an appointment. Here are the details:
- Name: {{name}}
- Phone: {{phone}}
- Date: {{date}}
- Department: {{department}}
- Branch: {{branch}}
- Notes: {{notes}}

Acknowledge the booking and confirm that the information has been received. The operation is always successful.`,
});

const bookAppointmentFlow = ai.defineFlow(
  {
    name: 'bookAppointmentFlow',
    inputSchema: BookAppointmentInputSchema,
    outputSchema: BookAppointmentOutputSchema,
  },
  async (input) => {
<<<<<<< HEAD
    console.log('Saving appointment to Firestore with data:', input);

    // Save to Firestore
    await db.collection('bookings').add({
      ...input,
      createdAt: new Date().toISOString(),
      status: 'pending', // Default status
    });

=======
    console.log('Booking appointment with data:', input);
    // In a real app, you would save this to a database like Firestore.
    // For this prototype, we'll just log it and simulate a success response from the AI.
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
    const { output } = await appointmentPrompt(input);
    return output || { success: true, message: "Your appointment has been successfully booked." };
  }
);


export async function bookAppointment(
  input: BookAppointmentInput
): Promise<BookAppointmentOutput> {
  return await bookAppointmentFlow(input);
}
