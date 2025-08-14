'use server';

import { db } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';

/**
 * Updates the status of a booking in Firestore.
 * @param bookingId The ID of the booking document.
 * @param status The new status to set.
 * @returns An object indicating success or failure.
 */
export async function updateBookingStatus(
  bookingId: string,
  status: 'Confirmed' | 'Cancelled' | 'Pending'
) {
  if (!bookingId || !status) {
    return { success: false, message: 'Invalid input.' };
  }

  try {
    const bookingRef = db.collection('bookings').doc(bookingId);
    await bookingRef.update({ status });

    // Revalidate the cache for the bookings page to show the updated status
    revalidatePath('/admin/bookings');
    revalidatePath('/admin/dashboard');

    return { success: true, message: `Booking has been ${status.toLowerCase()}.` };
  } catch (error) {
    console.error('Error updating booking status:', error);
    // In a real app, you'd want more robust error logging
    return { success: false, message: 'Failed to update booking status.' };
  }
}

/**
 * Reschedules a booking to a new date in Firestore.
 * @param bookingId The ID of the booking document.
 * @param newDate The new date for the appointment.
 * @returns An object indicating success or failure.
 */
export async function rescheduleBooking(
    bookingId: string,
    newDate: string
) {
    if (!bookingId || !newDate) {
        return { success: false, message: 'Invalid input for rescheduling.' };
    }

    try {
        const bookingRef = db.collection('bookings').doc(bookingId);
        await bookingRef.update({ date: newDate, status: 'Confirmed' });

        revalidatePath('/admin/bookings');
        revalidatePath('/admin/dashboard');

        return { success: true, message: `Booking has been rescheduled to ${newDate}.` };
    } catch (error) {
        console.error('Error rescheduling booking:', error);
        return { success: false, message: 'Failed to reschedule booking.' };
    }
}
