
/**
 * @fileOverview A script to create an admin user in Firebase Authentication.
 * To run: `npm run setup:admin`
 */

import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import "dotenv/config";

// Initialize Firebase Admin SDK if not already initialized.
// This will use Application Default Credentials in a managed environment.
if (!getApps().length) {
  initializeApp();
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
