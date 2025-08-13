
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
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

let app: App;
const serviceAccount = getFirebaseAdminCredentials();

if (getApps().length === 0) {
  if (serviceAccount) {
    app = initializeApp({
      credential: cert(serviceAccount)
    });
    console.log("Firebase Admin SDK initialized successfully.");
  } else {
    // This will happen if the env vars are not set.
    // It allows the app to build but will fail at runtime if Firebase is accessed.
    app = initializeApp();
  }
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export { db };
