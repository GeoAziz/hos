
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import "dotenv/config";

let serviceAccount: any;

// Conditionally import the service account key if not in a Vercel environment
if (process.env.SERVICE_ACCOUNT_PRIVATE_KEY) {
    serviceAccount = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
        privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    };
} else {
    try {
        serviceAccount = require('../../serviceAccountKey.json');
    } catch (e) {
        console.error("serviceAccountKey.json not found. Make sure you have the file for local development, or set environment variables for production.");
        serviceAccount = undefined;
    }
}

if (serviceAccount && !getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export { db };
