

import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";


// Initialize Firebase Admin SDK only if it hasn't been initialized yet.
// In a managed environment, this will automatically use the available
// service account credentials.
if (!getApps().length) {
  try {
    initializeApp();
     console.log("Firebase Admin SDK initialized successfully.");
  } catch (error: any) => {
    console.error("Firebase Admin SDK initialization error:", error.message);
  }
}

const db = getFirestore();

export { db };
