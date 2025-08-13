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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { User, Calendar as CalendarIcon, Stethoscope, Building, MessageSquare, Phone, UserPlus, Briefcase, Cake } from 'lucide-react';
import { bookAppointment } from '@/ai/flows/book-appointment-flow';
import { Textarea } from './ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { useState } from 'react';

const appointmentFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  department: z.string({
    required_error: 'Please select a department.',
  }),
   doctor: z.string({
    required_error: 'Please select a doctor.',
  }),
  branch: z.string({
    required_error: 'Please select a branch.',
  }),
  date: z.date({
    required_error: "An appointment date is required.",
  }),
  notes: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

const doctorsByDepartment: Record<string, { id: string, name: string }[]> = {
    'Cardiology': [{ id: 'dr-evelyn-reed', name: 'Dr. Evelyn Reed' }],
    'Neurology': [{ id: 'dr-marcus-chen', name: 'Dr. Marcus Chen' }],
    'Pediatrics': [{ id: 'dr-sofia-garcia', name: 'Dr. Sofia Garcia' }],
    'General Check-up': [
        { id: 'dr-evelyn-reed', name: 'Dr. Evelyn Reed' },
        { id: 'dr-marcus-chen', name: 'Dr. Marcus Chen' },
        { id: 'dr-sofia-garcia', name: 'Dr. Sofia Garcia' },
    ],
};


export function AppointmentForm() {
  const { toast } = useToast();
  const [selectedDept, setSelectedDept] = useState('');
  
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      notes: '',
    },
  });

  const availableDoctors = doctorsByDepartment[selectedDept] || [];

  async function onSubmit(data: AppointmentFormValues) {
    try {
        const submissionData = {
            ...data,
            dob: format(data.dob, 'PPP'),
            date: format(data.date, 'PPP'),
        }
      await bookAppointment(submissionData);
      toast({
        title: 'Appointment Booked!',
        description: `Thank you, ${data.name}. Your appointment has been requested for ${submissionData.date}. We will contact you shortly to confirm.`,
      });
      form.reset();
      setSelectedDept('');
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
            <h3 className="text-lg font-medium mb-4 border-b pb-2">Your Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
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
                    render={({ field }) => (
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
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                <Cake className="mr-2 h-5 w-5 text-muted-foreground" />
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
            </div>
        </div>
        
        <div>
             <h3 className="text-lg font-medium mb-4 border-b pb-2">Appointment Details</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Department</FormLabel>
                        <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Select
                            onValueChange={(value) => {
                                field.onChange(value);
                                setSelectedDept(value);
                                form.setValue('doctor', ''); // Reset doctor on department change
                            }}
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
                    name="doctor"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Doctor</FormLabel>
                        <div className="relative">
                        <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={!selectedDept}
                        >
                            <FormControl>
                            <SelectTrigger className="pl-10">
                                <SelectValue placeholder="Select a doctor" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {availableDoctors.map(doc => (
                                     <SelectItem key={doc.id} value={doc.name}>{doc.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        </div>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Appointment Date</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                    <FormItem className="lg:col-span-3">
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
                             <SelectItem value="Seaside Health">
                                Seaside Health
                            </SelectItem>
                             <SelectItem value="Mountainview Hospital">
                                Mountainview Hospital
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
                    render={({ field }) => (
                    <FormItem className="md:col-span-2 lg:col-span-3">
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                        <FormControl>
                            <Textarea placeholder="Reason for visit, symptoms, etc." {...field} className="pl-10" />
                        </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
        </div>
        
        <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Submitting...' : 'Confirm & Book Appointment'}
        </Button>
      </form>
    </Form>
  );
}
