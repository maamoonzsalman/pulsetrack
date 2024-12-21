import * as sdk from 'node-appwrite';

export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID as string;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;
export const DATABASE_ID = process.env.DATABASE_ID as string;
export const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID as string;
export const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID as string;
export const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID as string;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID as string;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT as string;

const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
