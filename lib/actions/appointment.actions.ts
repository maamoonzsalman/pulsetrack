import { databases, DATABASE_ID, APPOINTMENT_COLLECTION_ID, messaging } from "../appwrite.config";
import { ID, Query } from "node-appwrite";
import { parseStringify, formatDateTime } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { Appointment } from "@/types/appwrite.types";


//  CREATE APPOINTMENT
export const createAppointment = async (
    appointment: CreateAppointmentParams
  ) => {
    try {
      const newAppointment = await databases.createDocument(
        DATABASE_ID!,
        APPOINTMENT_COLLECTION_ID!,
        ID.unique(),
        appointment
      );
  
      return parseStringify(newAppointment);
    } catch (error) {
      console.error("An error occurred while creating a new appointment:", error);
    }
  };
  
  
  
  // GET APPOINTMENT
  export const getAppointment = async (appointmentId: string) => {
    try {
      const appointment = await databases.getDocument(
        DATABASE_ID!,
        APPOINTMENT_COLLECTION_ID!,
        appointmentId
      );
  
      return parseStringify(appointment);
    } catch (error) {
      console.error(
        "An error occurred while retrieving the existing patient:",
        error
      );
    }
  };