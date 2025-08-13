
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";

const getFirebaseAdminCredentials = () => {
  const privateKey = process.env.SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !privateKey) {
    console.warn("Firebase Admin credentials are not fully set in environment variables. Skipping initialization for build-time rendering on client if this is the case.");
    return null;
  }
  
  return {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey,
  };
};

const serviceAccount = getFirebaseAdminCredentials();

if (!getApps().length) {
  if (serviceAccount) {
    try {
      initializeApp({
        credential: cert(serviceAccount)
      });
      console.log("Firebase Admin SDK initialized successfully.");
    } catch (error: any) {
        console.error("Firebase Admin SDK initialization error:", error.message);
    }
  }
}

const db = getFirestore();

export { db };
