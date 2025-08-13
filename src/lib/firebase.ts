
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";

let serviceAccount: any;

// Conditionally import the service account key if not in a Vercel environment
if (process.env.SERVICE_ACCOUNT_CLIENT_EMAIL && process.env.SERVICE_ACCOUNT_PRIVATE_KEY) {
    serviceAccount = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
        privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    };
} else {
    try {
        serviceAccount = require('../../serviceAccountKey.json');
    } catch (e) {
        console.warn("serviceAccountKey.json not found. This is okay for client-side rendering, but server-side features will be disabled.");
        serviceAccount = undefined; // Set to undefined if no credentials are found
    }
}

// Initialize Firebase Admin SDK only if it hasn't been initialized yet and credentials exist
if (serviceAccount && !getApps().length) {
  try {
    initializeApp({
      credential: cert(serviceAccount),
    });
     console.log("Firebase Admin SDK initialized successfully.");
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error.message);
  }
} else if (!getApps().length) {
    console.warn("Firebase Admin SDK credentials not found. Skipping Admin SDK initialization.");
}

const db = getFirestore();

export { db };
