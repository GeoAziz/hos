
'use server';

import { db } from './firebase';

export async function getBookings() {
    const snapshot = await db.collection('bookings')
        .orderBy('createdAt', 'desc')
        .get();

    if (snapshot.empty) {
        return [];
    }
    
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}


export async function getInquiries() {
    const snapshot = await db.collection('inquiries')
        .orderBy('createdAt', 'desc')
        .get();

    if (snapshot.empty) {
        return [];
    }
    
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}
