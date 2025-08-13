

import { initializeApp, getApps, AppOptions } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";


// Initialize Firebase Admin SDK only if it hasn't been initialized yet.
if (!getApps().length) {
  try {
    // In a managed environment like Vercel, the Admin SDK needs the project ID
    // to be explicitly passed during initialization at build time.
    const appOptions: AppOptions = {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    };
    initializeApp(appOptions);
     console.log("Firebase Admin SDK initialized successfully.");
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error.message);
  }
}

const db = getFirestore();

export { db };
