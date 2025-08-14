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
import { MoreHorizontal, Check, X, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { updateBookingStatus } from '@/app/admin/bookings/actions';

interface BookingActionsProps {
  bookingId: string;
}

export function BookingActions({ bookingId }: BookingActionsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  return (
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
        <DropdownMenuItem onSelect={() => handleStatusUpdate('Cancelled')} disabled={isSubmitting}>
          <X className="mr-2 h-4 w-4" />
          Cancel
        </DropdownMenuItem>
         <DropdownMenuItem disabled>
          <Clock className="mr-2 h-4 w-4" />
          Reschedule
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
