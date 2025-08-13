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

export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    experience: string;
    bio: string;
    imageUrl: string;
    education: string[];
    services: string[];
    rating: number;
    testimonials: { name: string; quote: string }[];
}

export async function getDoctors(): Promise<Doctor[]> {
    const snapshot = await db.collection('doctors')
        .orderBy('name', 'asc')
        .get();

    if (snapshot.empty) {
        return [];
    }
    
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as Doctor[];
}


export async function getDoctorById(id: string): Promise<Doctor | null> {
    const docRef = db.collection('doctors').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
        return null;
    }

    return { id: doc.id, ...doc.data() } as Doctor;
}