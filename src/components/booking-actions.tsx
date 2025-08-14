'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Check, X, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { updateBookingStatus, rescheduleBooking } from '@/app/admin/bookings/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';

interface BookingActionsProps {
  bookingId: string;
}

export function BookingActions({ bookingId }: BookingActionsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [newDate, setNewDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleStatusUpdate = async (status: 'Confirmed' | 'Cancelled' | 'Pending') => {
    setIsSubmitting(true);
    try {
      const result = await updateBookingStatus(bookingId, status);
      if (result.success) {
        toast({
          title: 'Success',
          description: result.message,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReschedule = async () => {
    if (!newDate) {
        toast({ title: "Error", description: "Please select a new date.", variant: "destructive"});
        return;
    }

    setIsSubmitting(true);
    try {
        const formattedDate = format(newDate, 'PPP');
        const result = await rescheduleBooking(bookingId, formattedDate);
        if (result.success) {
            toast({
                title: 'Success',
                description: result.message,
            });
            setIsRescheduleOpen(false);
        } else {
            throw new Error(result.message);
        }
    } catch (error: any) {
        toast({
            title: 'Error',
            description: error.message || 'An unexpected error occurred.',
            variant: 'destructive',
        });
    } finally {
        setIsSubmitting(false);
    }
  };


  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button aria-haspopup="true" size="icon" variant="ghost" disabled={isSubmitting}>
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => handleStatusUpdate('Confirmed')} disabled={isSubmitting}>
            <Check className="mr-2 h-4 w-4" />
            Confirm
          </DropdownMenuItem>
           <DropdownMenuItem onSelect={() => setIsRescheduleOpen(true)} disabled={isSubmitting}>
            <Clock className="mr-2 h-4 w-4" />
            Reschedule
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleStatusUpdate('Cancelled')} disabled={isSubmitting} className="text-red-600 focus:text-red-600">
            <X className="mr-2 h-4 w-4" />
            Cancel
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isRescheduleOpen} onOpenChange={setIsRescheduleOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reschedule Appointment</DialogTitle>
            <DialogDescription>
              Select a new date for the appointment. The status will be automatically updated to 'Confirmed'.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 flex justify-center">
            <Calendar
                mode="single"
                selected={newDate}
                onSelect={setNewDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsRescheduleOpen(false)} disabled={isSubmitting}>Cancel</Button>
            <Button onClick={handleReschedule} disabled={isSubmitting}>
              {isSubmitting ? 'Rescheduling...' : 'Confirm Reschedule'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
