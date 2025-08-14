
'use server';

import { db } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';

/**
 * Updates the status of an inquiry in Firestore.
 * @param inquiryId The ID of the inquiry document.
 * @param status The new status to set.
 * @returns An object indicating success or failure.
 */
export async function updateInquiryStatus(
  inquiryId: string,
  status: 'new' | 'read' | 'archived'
) {
  if (!inquiryId || !status) {
    return { success: false, message: 'Invalid input.' };
  }

  try {
    const inquiryRef = db.collection('inquiries').doc(inquiryId);
    await inquiryRef.update({ status });

    // Revalidate the cache for the inquiries and dashboard pages
    revalidatePath('/admin/inquiries');
    revalidatePath('/admin/dashboard');

    return { success: true, message: `Inquiry has been marked as ${status}.` };
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    return { success: false, message: 'Failed to update inquiry status.' };
  }
}
