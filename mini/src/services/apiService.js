// // ApiService.js
// const API_URL = "http://localhost:8080/api";
// export const ApiService = {
//   getAppointments: () => fetch(`${API_URL}/appointments`),
//   getPatients: () => fetch(`${API_URL}/patients`),
//   getBills: () => fetch(`${API_URL}/bills`),
//   getDoctors: () => fetch(`${API_URL}/doctors`),
//   getDoctor: (id) => fetch(`${API_URL}/doctors/${id}`),
//   getPrescriptions: () => fetch(`${API_URL}/prescriptions`),
//   // Add other CRUD operations as needed
//   deleteDoctor: (id) => {
//     /* Implement DELETE request to delete doctor */
//   },
// };
import PatientService from '../services/PatientService';

const BASE_URL = "http://localhost:8080/api/appointments";

export const ApiService = {
  getAppointments: () => fetch(BASE_URL),
  createAppointment: (appointmentData) =>
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(appointmentData)
    }),

    getAllPatients: async () => {
      try {
        const patients = await PatientService.getAllPatients();
        return patients;
      } catch (error) {
        console.error('Error fetching patients:', error);
        throw error;
      }
    },
  
    createPatient: async (patient) => {
      try {
        const newPatient = await PatientService.createPatient(patient);
        return newPatient;
      } catch (error) {
        console.error('Error creating patient:', error);
        throw error;
      }
    },
  // Add other CRUD operations as needed
};
