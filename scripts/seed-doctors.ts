
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
if (serviceAccount && !getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
} else if (!serviceAccount) {
    console.warn("Firebase Admin SDK credentials not found. Skipping initialization.");
}


const db = getFirestore();

// --- Doctor Data ---
const doctors = [
    {
        name: "Dr. Evelyn Reed",
        specialty: "Cardiology",
        experience: "15+ Years",
        bio: "Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a fellow of the American College of Cardiology and renowned for her compassionate, patient-first approach. Dr. Reed is dedicated to advancing heart health through innovative treatments and preventive care.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,woman,professional,headshot",
        education: ["MD, Harvard Medical School", "Residency, Cardiology, Johns Hopkins Hospital"],
        services: ["Echocardiograms", "Stress Testing", "Cardiac Catheterization", "Preventive Cardiology"],
        rating: 4.9,
        testimonials: [
            { name: "John S.", quote: "Dr. Reed's expertise and kindness were a great comfort during a stressful time. I highly recommend her." },
            { name: "Maria G.", quote: "She took the time to explain everything clearly and made me feel like a partner in my own healthcare." },
        ],
    },
    {
        name: "Dr. Marcus Chen",
        specialty: "Neurology",
        experience: "12+ Years",
        bio: "Dr. Chen specializes in neurological disorders, including epilepsy and stroke. He is known for his patient-centered approach and innovative treatment methods. He actively participates in clinical trials to bring the latest advancements to his patients.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,man,professional,headshot",
        education: ["MD, Stanford University School of Medicine", "Residency, Neurology, Mayo Clinic"],
        services: ["EEG & EMG Testing", "Stroke Management", "Epilepsy Treatment", "Headache and Migraine Clinic"],
        rating: 4.8,
        testimonials: [
             { name: "David L.", quote: "Dr. Chen is a brilliant neurologist. He was able to diagnose my condition when others couldn't." },
        ],
    },
    {
        name: "Dr. Sofia Garcia",
        specialty: "Pediatrics",
        experience: "10+ Years",
        bio: "With a passion for children's health, Dr. Garcia has dedicated her career to pediatrics. She creates a warm, welcoming environment for her young patients and is a trusted name for parents in the community.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,female,pediatrician,headshot",
        education: ["MD, Yale School of Medicine", "Residency, Pediatrics, Children's Hospital of Philadelphia"],
        services: ["Well-child Checkups", "Vaccinations", "Developmental Screenings", "Acute Illness Care"],
        rating: 4.9,
        testimonials: [
            { name: "The Johnson Family", quote: "Dr. Garcia is amazing with kids! Our children actually look forward to their appointments." },
        ],
    },
    {
        name: "Dr. Ben Carter",
        specialty: "Orthopedics",
        experience: "18+ Years",
        bio: "Dr. Carter is a leading orthopedic surgeon, specializing in sports injuries and joint replacement. He has helped countless athletes return to their peak performance and is a pioneer in minimally invasive surgical techniques.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,male,surgeon,headshot",
        education: ["MD, Columbia University", "Residency, Orthopedic Surgery, Hospital for Special Surgery"],
        services: ["Knee & Hip Replacement", "Sports Injury Treatment", "Arthroscopic Surgery", "Fracture Care"],
        rating: 4.8,
        testimonials: [
             { name: "Michael B.", quote: "Thanks to Dr. Carter, I was back on the field in record time after my knee surgery." },
        ],
    },
    {
        name: "Dr. Olivia White",
        specialty: "Dermatology",
        experience: "8+ Years",
        bio: "Dr. White provides comprehensive dermatological care, from cosmetic procedures to the treatment of skin cancer. She is dedicated to helping patients achieve healthy, beautiful skin through personalized treatment plans.",
        imageUrl: "https://source.unsplash.com/400x400/?doctor,woman,dermatologist,headshot",
        education: ["MD, New York University", "Residency, Dermatology, UCSF Medical Center"],
        services: ["Skin Cancer Screening", "Acne Treatment", "Cosmetic Dermatology", "Mohs Surgery"],
        rating: 4.9,
        testimonials: [
            { name: "Jessica P.", quote: "Dr. White is incredibly knowledgeable and my skin has never looked better. Her advice is priceless." },
        ],
    }
];

// --- Seeding Function ---
async function seedDoctors() {
    if (!serviceAccount) {
        console.error('Firebase Admin SDK not initialized. Cannot seed database. Please provide credentials.');
        return;
    }
    const doctorsCollection = db.collection('doctors');
    console.log('Starting to seed doctors with enhanced data...');

    const batch = db.batch();

    for (const doctor of doctors) {
        // Use a combination of name and specialty to create a unique ID
        const docId = `${doctor.name.replace(/\s+/g, '-')}-${doctor.specialty}`.toLowerCase();
        const docRef = doctorsCollection.doc(docId);
        batch.set(docRef, doctor);
        console.log(`- Staged ${doctor.name} for creation/update.`);
    }

    try {
        await batch.commit();
        console.log('\nSuccessfully seeded doctors collection!');
        console.log(`Total doctors added/updated: ${doctors.length}`);
    } catch (error) {
        console.error('Error seeding doctors:', error);
        process.exit(1);
    }
}

seedDoctors();
