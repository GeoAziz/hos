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
import {User, Calendar, Stethoscope, Building} from 'lucide-react';

const appointmentFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Please select a valid date.',
  }),
  department: z.string({
    required_error: 'Please select a department.',
  }),
  branch: z.string({
    required_error: 'Please select a branch.',
  }),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export function AppointmentForm() {
  const {toast} = useToast();
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(data: AppointmentFormValues) {
    console.log(data);
    toast({
      title: 'Appointment Booked!',
      description: `Thank you, ${data.name}. Your appointment for the ${data.department} department at our ${data.branch} branch on ${data.date} has been requested. We will contact you shortly to confirm.`,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
        <Button type="submit" className="w-full" size="lg">
          Book Appointment
        </Button>
      </form>
    </Form>
  );
}
