
/**
 * @fileOverview A script to seed the Firestore database with initial doctor data.
 * To run: `npm run seed:doctors`
 */

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";

// --- Credentials Setup ---
let serviceAccount: any;
if (process.env.SERVICE_ACCOUNT_CLIENT_EMAIL && process.env.SERVICE_ACCOUNT_PRIVATE_KEY) {
    serviceAccount = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
        privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    };
} else {
    try {
        serviceAccount = require('../serviceAccountKey.json');
    } catch (e) {
        console.error("serviceAccountKey.json not found. Make sure you have the file for local development, or set environment variables.");
        process.exit(1);
    }
}

// --- Firebase Initialization ---
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

// --- Doctor Data ---
const doctors = [
    {
        name: "Dr. Evelyn Reed",
        specialty: "Cardiology",
        experience: "15+ Years",
        bio: "Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a fellow of the American College of Cardiology.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,woman,professional,headshot",
    },
    {
        name: "Dr. Marcus Chen",
        specialty: "Neurology",
        experience: "12+ Years",
        bio: "Dr. Chen specializes in neurological disorders, including epilepsy and stroke. He is known for his patient-centered approach and innovative treatment methods.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,man,professional,headshot",
    },
    {
        name: "Dr. Sofia Garcia",
        specialty: "Pediatrics",
        experience: "10+ Years",
        bio: "With a passion for children's health, Dr. Garcia has dedicated her career to pediatrics. She is a trusted name for parents in the community.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,female,pediatrician,headshot",
    },
    {
        name: "Dr. Ben Carter",
        specialty: "Orthopedics",
        experience: "18+ Years",
        bio: "Dr. Carter is a leading orthopedic surgeon, specializing in sports injuries and joint replacement. He has helped countless athletes return to their peak performance.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,male,surgeon,headshot"
    },
    {
        name: "Dr. Olivia White",
        specialty: "Dermatology",
        experience: "8+ Years",
        bio: "Dr. White provides comprehensive dermatological care, from cosmetic procedures to the treatment of skin cancer. She is dedicated to helping patients achieve healthy, beautiful skin.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,woman,dermatologist,headshot"
    }
];

// --- Seeding Function ---
async function seedDoctors() {
    const doctorsCollection = db.collection('doctors');
    console.log('Starting to seed doctors...');

    const batch = db.batch();

    for (const doctor of doctors) {
        // Use a combination of name and specialty to create a unique ID
        const docId = `${doctor.name.replace(/\s+/g, '-')}-${doctor.specialty}`.toLowerCase();
        const docRef = doctorsCollection.doc(docId);
        batch.set(docRef, doctor);
        console.log(`- Staged ${doctor.name} for creation.`);
    }

    try {
        await batch.commit();
        console.log('\nSuccessfully seeded doctors collection!');
        console.log(`Total doctors added: ${doctors.length}`);
    } catch (error) {
        console.error('Error seeding doctors:', error);
        process.exit(1);
    }
}

seedDoctors();
