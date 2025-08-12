'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleInquiry } from '@/ai/flows/inquiry-flow';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const inquiryFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

export function InquiryForm() {
  const { toast } = useToast();
  const [analysis, setAnalysis] = useState<{isUrgent: boolean, department: string, summary: string} | null>(null);

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: InquiryFormValues) {
    try {
      const result = await handleInquiry(data);
      setAnalysis(result);
      toast({
        title: 'Inquiry Sent!',
        description: 'Thank you for your message. We have received it and will get back to you soon.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input type="email" placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Textarea placeholder="Your Message" {...field} rows={5}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full">
                Send Message
                </Button>
            </form>
        </Form>
        {analysis && (
            <Card className="mt-8 text-left bg-green-50 border-green-200">
                <CardHeader>
                    <CardTitle className="text-lg text-green-900">AI Analysis Complete</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2 text-green-800">
                    <p><strong>Urgency:</strong> {analysis.isUrgent ? <span className="font-bold text-red-600">High</span> : "Normal"}</p>
                    <p><strong>Suggested Department:</strong> {analysis.department}</p>
                    <p><strong>Summary:</strong> {analysis.summary}</p>
                </CardContent>
            </Card>
        )}
    </div>
  );
}
