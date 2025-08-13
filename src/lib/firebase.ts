
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";

// Function to safely get credentials from environment variables
const getFirebaseAdminCredentials = () => {
  const privateKey = process.env.SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

  if (projectId && clientEmail && privateKey) {
    return {
      projectId,
      clientEmail,
      privateKey,
    };
  }
  return null;
};

let app: App;

// Initialize Firebase Admin SDK only if it hasn't been already
if (getApps().length === 0) {
  const serviceAccount = getFirebaseAdminCredentials();
  if (serviceAccount) {
    app = initializeApp({
      credential: cert(serviceAccount)
    });
  } else {
    // This will happen in environments where the server-side env vars aren't set.
    // It allows the app to build but will fail at runtime if Firebase Admin is accessed.
    console.warn("Firebase Admin credentials not found. Using default initialization.");
    app = initializeApp();
  }
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export { db };
