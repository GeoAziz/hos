
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";

let serviceAccount: any;

// Conditionally import the service account key if not in a Vercel environment
if (!process.env.SERVICE_ACCOUNT_PRIVATE_KEY) {
  serviceAccount = require('../../serviceAccountKey.json');
}

// Correctly type the service account credentials
const serviceAccountConfig = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || serviceAccount.project_id,
  clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL || serviceAccount.client_email,
  // Use environment variable for private key in production, fallback to file for local dev
  privateKey: (process.env.SERVICE_ACCOUNT_PRIVATE_KEY || serviceAccount.private_key).replace(/\\n/g, '\n'),
};


if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccountConfig),
  });
}

const db = getFirestore();

export { db };
