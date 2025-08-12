'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {useToast} from '@/hooks/use-toast';
import {User, Calendar, Stethoscope, Building, MessageSquare, Phone} from 'lucide-react';
import { bookAppointment } from '@/ai/flows/book-appointment-flow';
import { Textarea } from './ui/textarea';

const appointmentFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Please select a valid date.',
  }),
  department: z.string({
    required_error: 'Please select a department.',
  }),
  branch: z.string({
    required_error: 'Please select a branch.',
  }),
  notes: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export function AppointmentForm() {
  const {toast} = useToast();
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      notes: '',
    },
  });

  async function onSubmit(data: AppointmentFormValues) {
    try {
      await bookAppointment(data);
      toast({
        title: 'Appointment Booked!',
        description: `Thank you, ${data.name}. Your appointment has been requested. We will contact you shortly to confirm.`,
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error booking your appointment. Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="pl-10" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="phone"
            render={({field}) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <FormControl>
                    <Input placeholder="555-555-5555" {...field} className="pl-10" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({field}) => (
              <FormItem>
                <FormLabel>Preferred Date</FormLabel>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <FormControl>
                    <Input type="date" {...field} className="pl-10" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={({field}) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Cardiology">Cardiology</SelectItem>
                      <SelectItem value="General Check-up">
                        General Check-up
                      </SelectItem>
                      <SelectItem value="Neurology">Neurology</SelectItem>
                      <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="branch"
            render={({field}) => (
              <FormItem>
                <FormLabel>Branch</FormLabel>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select a branch" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Downtown Clinic">
                        Downtown Clinic
                      </SelectItem>
                      <SelectItem value="Uptown Medical Center">
                        Uptown Medical Center
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="notes"
            render={({field}) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Additional Notes</FormLabel>
                <div className="relative">
                   <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                  <FormControl>
                    <Textarea placeholder="Anything else we should know?" {...field} className="pl-10" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" size="lg">
          Book Appointment
        </Button>
      </form>
    </Form>
  );
}
