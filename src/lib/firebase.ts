
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../../serviceAccountKey.json';

// Correctly type the service account credentials
const serviceAccountConfig = {
  projectId: serviceAccount.project_id,
  clientEmail: serviceAccount.client_email,
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
