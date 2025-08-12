
/**
 * @fileOverview A script to create an admin user in Firebase Authentication.
 * To run: `npm run setup:admin`
 */

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import "dotenv/config";

let serviceAccount: any;

// Conditionally import the service account key if not in a Vercel environment
if (!process.env.SERVICE_ACCOUNT_PRIVATE_KEY) {
  serviceAccount = require('../serviceAccountKey.json');
}


// Correctly type the service account credentials
const serviceAccountConfig = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || serviceAccount.project_id,
  clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL || serviceAccount.client_email,
  // Use environment variable for private key in production, fallback to file for local dev
  privateKey: (process.env.SERVICE_ACCOUNT_PRIVATE_KEY || serviceAccount.private_key).replace(/\\n/g, '\n'),
};

// Initialize Firebase Admin SDK if not already initialized
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccountConfig),
  });
}

const auth = getAuth();

const adminEmail = 'admin@medibook.com';
const adminPassword = 'admin123';

async function createAdminUser() {
  try {
    // Check if user already exists
    try {
      const userRecord = await auth.getUserByEmail(adminEmail);
      console.log(`Admin user with email ${userRecord.email} already exists.`);
      return;
    } catch (error: any) {
      if (error.code !== 'auth/user-not-found') {
        throw error; // Re-throw other errors
      }
      // If user not found, proceed to create
    }

    // Create the new user
    const userRecord = await auth.createUser({
      email: adminEmail,
      emailVerified: true,
      password: adminPassword,
      displayName: 'Admin User',
      disabled: false,
    });

    console.log('Successfully created new admin user:', userRecord.uid);
    console.log(`Email: ${adminEmail}`);
    console.log('Password: [hidden]');

  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

createAdminUser();
