# Project Scripts

This directory contains essential setup scripts for the MediBook application.

## `create-admin.ts`

**Purpose:** This script creates the default administrative user in Firebase Authentication. This user is required to log in to the admin dashboard at the `/login` route.

**Credentials:**
- **Email:** `admin@medibook.com`
- **Password:** `admin123`

**How to Run:**
```bash
npm run setup:admin
```
This only needs to be run once per Firebase project.

## `seed-doctors.ts`

**Purpose:** This script populates (or "seeds") the Cloud Firestore database with the initial set of doctor profiles. The application's "Find a Doctor" directory, doctor profile pages, and appointment form rely on this data.

**Without running this script, the doctor-related sections of the application will be empty.**

**How to Run:**
```bash
npm run seed:doctors
```
This should be run once when setting up a new environment to ensure the application has data to display.
