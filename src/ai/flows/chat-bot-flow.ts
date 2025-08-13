
'use server';
/**
 * @fileOverview A chatbot flow for answering user questions.
 * - chatWithBot: The main function to interact with the chatbot.
 * - ChatMessage: The type for a single chat message.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const hospitalData = {
    services: ["Cardiology", "Neurology", "Pediatrics", "General Check-up", "Emergency Care", "Dermatology", "Orthopedics", "Surgery", "Radiology", "Immunology", "Advanced Imaging", "Dialysis", "Physiotherapy"],
    doctors: [
        { name: "Dr. Evelyn Reed", specialty: "Cardiology" },
        { name: "Dr. Marcus Chen", specialty: "Neurology" },
        { name: "Dr. Sofia Garcia", specialty: "Pediatrics" },
    ],
    branches: [
        { name: "Downtown Clinic", address: "123 Health St, Medical City" },
        { name: "Uptown Medical Center", address: "456 Wellness Ave, Medical City" },
        { name: "Seaside Health", address: "789 Ocean View, Bayside" },
        { name: "Mountainview Hospital", address: "101 Peak Rd, Summit City" },
    ],
    appointmentInfo: "Users can book an appointment by filling out the form on the homepage or by calling the desired branch.",
    contact: "General contact is (123) 456-7890 or contact@medibook.com. Branch-specific contacts are on the branches page."
};


const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

const ChatInputSchema = z.object({
  history: z.array(ChatMessageSchema),
  query: z.string(),
});

const chatBotPrompt = ai.definePrompt({
    name: 'chatBotPrompt',
    input: { schema: ChatInputSchema },
    output: { schema: ChatMessageSchema },
    prompt: `You are a friendly and helpful AI assistant for MediBook Hospital. Your goal is to answer user questions based on the provided context. If the answer isn't in the context, say you don't have that information and suggest they contact the hospital directly. Be concise and helpful.

    Context about MediBook Hospital:
    - Services Offered: ${hospitalData.services.join(', ')}.
    - Our Doctors: ${hospitalData.doctors.map(d => `${d.name} (${d.specialty})`).join('; ')}.
    - Our Branches: ${hospitalData.branches.map(b => `${b.name} at ${b.address}`).join('; ')}.
    - How to Book an Appointment: ${hospitalData.appointmentInfo}.
    - Contact Information: ${hospitalData.contact}.

    Here is the conversation history:
    {{#each history}}
    {{role}}: {{content}}
    {{/each}}

    Now, answer the following user query:
    user: {{query}}
    `,
});

const chatBotFlow = ai.defineFlow(
  {
    name: 'chatBotFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatMessageSchema,
  },
  async ({ history, query }) => {
    const { output } = await chatBotPrompt({ history, query });
    return output || { role: 'model', content: "I'm sorry, I couldn't generate a response. Please try again."};
  }
);

export async function chatWithBot(history: ChatMessage[], query: string): Promise<ChatMessage> {
  return await chatBotFlow({ history, query });
}
