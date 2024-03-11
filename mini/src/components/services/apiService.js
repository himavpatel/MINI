import axios from 'axios';

const baseUrl = 'http://localhost:8080/api';

const apiService = {
  // Appointments
  getAllAppointments: async () => {
    try {
      const response = await axios.get(`${baseUrl}/appointments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  },

  getAppointmentById: async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/appointments/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointment by ID:', error);
      throw error;
    }
  },

  createAppointment: async (appointment) => {
    try {
      const response = await axios.post(`${baseUrl}/appointments`, appointment);
      return response.data;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },

  updateAppointment: async (id, appointmentDetails) => {
    try {
      const response = await axios.put(`${baseUrl}/appointments/${id}`, appointmentDetails);
      return response.data;
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw error;
    }
  },

  deleteAppointment: async (id) => {
    try {
      await axios.delete(`${baseUrl}/appointments/${id}`);
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  },

  getAppointmentsByDoctorId: async (doctorId) => {
    try {
      const response = await axios.get(`${baseUrl}/appointments/doctor/${doctorId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments by doctor ID:', error);
      throw error;
    }
  },

  getAppointmentsByPatientId: async (patientId) => {
    try {
      const response = await axios.get(`${baseUrl}/appointments/patient/${patientId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments by patient ID:', error);
      throw error;
    }
  },
    
  getAllBills: async () => {
      try {
        const response = await axios.get(`${baseUrl}/bills`);
        return response.data;
      } catch (error) {
        console.error('Error fetching bills:', error);
        throw error;
      }
    },
  
  getBillById: async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/bills/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching bill by ID:', error);
        throw error;
      }
    },
  
  createBill: async (bill) => {
      try {
        const response = await axios.post(`${baseUrl}/bills`, bill);
        return response.data;
      } catch (error) {
        console.error('Error creating bill:', error);
        throw error;
      }
    },
  
  updateBill: async (id, billDetails) => {
      try {
        const response = await axios.put(`${baseUrl}/bills/${id}`, billDetails);
        return response.data;
      } catch (error) {
        console.error('Error updating bill:', error);
        throw error;
      }
    },
  
    deleteBill: async (id) => {
      try {
        await axios.delete(`${baseUrl}/bills/${id}`);
      } catch (error) {
        console.error('Error deleting bill:', error);
        throw error;
      }
    },
  
    // Prescriptions
    getAllPrescriptions: async () => {
      try {
        const response = await axios.get(`${baseUrl}/prescriptions`);
        return response.data;
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
        throw error;
      }
    },
  
    getPrescriptionById: async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/prescriptions/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching prescription by ID:', error);
        throw error;
      }
    },
  
    createPrescription: async (prescription) => {
      try {
        const response = await axios.post(`${baseUrl}/prescriptions`, prescription);
        return response.data;
      } catch (error) {
        console.error('Error creating prescription:', error);
        throw error;
      }
    },
  
    updatePrescription: async (id, prescriptionDetails) => {
      try {
        const response = await axios.put(`${baseUrl}/prescriptions/${id}`, prescriptionDetails);
        return response.data;
      } catch (error) {
        console.error('Error updating prescription:', error);
        throw error;
      }
    },
  
    deletePrescription: async (id) => {
      try {
        await axios.delete(`${baseUrl}/prescriptions/${id}`);
      } catch (error) {
        console.error('Error deleting prescription:', error);
        throw error;
      }
    },

    getAllPatients: async () => {
      try {
        const response = await axios.get(`${baseUrl}/patients`);
        return response.data;
      } catch (error) {
        console.error('Error fetching patients:', error);
        throw error;
      }
    },
  
    getPatientById: async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/patients/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching patient by ID:', error);
        throw error;
      }
    },
  
    createPatient: async (patient) => {
      try {
        const response = await axios.post(`${baseUrl}/patients`, patient);
        return response.data;
      } catch (error) {
        console.error('Error creating patient:', error);
        throw error;
      }
    },
  
    updatePatient: async (id, patientDetails) => {
      try {
        const response = await axios.put(`${baseUrl}/patients/${id}`, patientDetails);
        return response.data;
      } catch (error) {
        console.error('Error updating patient:', error);
        throw error;
      }
    },
  
    deletePatient: async (id) => {
      try {
        await axios.delete(`${baseUrl}/patients/${id}`);
      } catch (error) {
        console.error('Error deleting patient:', error);
        throw error;
      }
    },
  
    searchPatientsByName: async (name) => {
      try {
        const response = await axios.get(`${baseUrl}/patients/search?name=${name}`);
        return response.data;
      } catch (error) {
        console.error('Error searching patients by name:', error);
        throw error;
      }
    },
  
    getPatientsByAgeGreaterThan: async (age) => {
      try {
        const response = await axios.get(`${baseUrl}/patients/age?age=${age}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching patients by age greater than:', error);
        throw error;
      }
    },
  
    getPatientsByGender: async (gender) => {
      try {
        const response = await axios.get(`${baseUrl}/patients/gender?gender=${gender}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching patients by gender:', error);
        throw error;
      }
    },
  
    // Doctors
    getAllDoctors: async () => {
      try {
        const response = await axios.get(`${baseUrl}/doctors`);
        return response.data;
      } catch (error) {
        console.error('Error fetching doctors:', error);
        throw error;
      }
    },
  
    getDoctorById: async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/doctors/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching doctor by ID:', error);
        throw error;
      }
    },
  
    createDoctor: async (doctor) => {
      try {
        const response = await axios.post(`${baseUrl}/doctors`, doctor);
        return response.data;
      } catch (error) {
        console.error('Error creating doctor:', error);
        throw error;
      }
    },
  
    updateDoctor: async (id, doctorDetails) => {
      try {
        const response = await axios.put(`${baseUrl}/doctors/${id}`, doctorDetails);
        return response.data;
      } catch (error) {
        console.error('Error updating doctor:', error);
        throw error;
      }
    },
  
    deleteDoctor: async (id) => {
      try {
        await axios.delete(`${baseUrl}/doctors/${id}`);
      } catch (error) {
        console.error('Error deleting doctor:', error);
        throw error;
      }
    },
  
    getDoctorsBySpecialization: async (specialization) => {
      try {
        const response = await axios.get(`${baseUrl}/doctors/specialization/${specialization}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching doctors by specialization:', error);
        throw error;
      }
    },
  
    getDoctorsByExperienceGreaterThan: async (experience) => {
      try {
        const response = await axios.get(`${baseUrl}/doctors/experience/${experience}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching doctors by experience greater than:', error);
        throw error;
      }
    }

};

export default apiService;
