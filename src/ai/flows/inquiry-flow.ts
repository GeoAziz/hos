'use server';
/**
 * @fileOverview A flow for handling user inquiries.
 * - handleInquiry: A function that processes the user's message.
 * - InquiryInput: The input type for the handleInquiry function.
 * - InquiryOutput: The return type for the handleInquiry function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
<<<<<<< HEAD
<<<<<<< HEAD
import { db } from '@/lib/firebase';
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873

const InquiryInputSchema = z.object({
  name: z.string().describe("The user's name."),
  email: z.string().email().describe("The user's email address."),
  message: z.string().describe('The content of the inquiry message.'),
});

export type InquiryInput = z.infer<typeof InquiryInputSchema>;

const InquiryOutputSchema = z.object({
  isUrgent: z
    .boolean()
    .describe('Whether the inquiry is determined to be of high urgency.'),
  department: z
    .string()
    .describe(
      'The suggested department to route the inquiry to (e.g., Billing, Pediatrics, General Inquiry).'
    ),
  summary: z.string().describe('A brief summary of the user inquiry.'),
});

export type InquiryOutput = z.infer<typeof InquiryOutputSchema>;


const inquiryAnalysisPrompt = ai.definePrompt({
    name: 'inquiryAnalysisPrompt',
    input: { schema: InquiryInputSchema },
    output: { schema: InquiryOutputSchema },
    prompt: `Analyze the following user inquiry to determine its urgency, the most relevant department for handling it, and provide a concise summary.

    User Name: {{name}}
    User Email: {{email}}
    Message:
    "{{message}}"

    Departments available: Billing, Pediatrics, Cardiology, Neurology, General Inquiry.

    - Urgency: If the message contains keywords like "urgent", "emergency", "asap", "pain", "critical", or implies immediate medical need, mark isUrgent as true.
    - Department Routing: Based on the content, suggest the most appropriate department. Default to "General Inquiry" if unsure.
    - Summary: Briefly summarize the user's request.
    `,
});


const inquiryFlow = ai.defineFlow(
  {
    name: 'inquiryFlow',
    inputSchema: InquiryInputSchema,
    outputSchema: InquiryOutputSchema,
  },
  async (input) => {
    console.log('Handling inquiry with data:', input);
    
<<<<<<< HEAD
<<<<<<< HEAD
    const { output } = await inquiryAnalysisPrompt(input);

    const analysisResult = output || {
        isUrgent: false,
        department: 'General Inquiry',
        summary: 'Could not automatically analyze message.',
    };

    await db.collection('inquiries').add({
      ...input,
      ...analysisResult,
      createdAt: new Date().toISOString(),
      status: 'new',
    });

    if (analysisResult.isUrgent) {
      // In a real application, you would trigger an SMS notification to the on-call doctor.
      console.log(`URGENT INQUIRY: Routing to ${analysisResult.department}. Summary: ${analysisResult.summary}`);
    }
    
    return analysisResult;
=======
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
    // Here you would typically save the message to a database (e.g., Firestore).
    // For now, we'll just log it.
    
    const { output } = await inquiryAnalysisPrompt(input);

    if (output) {
      if (output.isUrgent) {
        // In a real application, you would trigger an SMS notification to the on-call doctor.
        console.log(`URGENT INQUIRY: Routing to ${output.department}. Summary: ${output.summary}`);
      }
      return output;
    }

    // Fallback in case AI fails to provide a structured response
    return {
      isUrgent: false,
      department: 'General Inquiry',
      summary: 'Could not automatically analyze message.',
    };
<<<<<<< HEAD
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
  }
);


export async function handleInquiry(input: InquiryInput): Promise<InquiryOutput> {
  return await inquiryFlow(input);
}
