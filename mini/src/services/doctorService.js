// DoctorService.js

import axios from 'axios';

const baseUrl = '/api/doctors';

const getAllDoctors = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

const createDoctor = async (doctor) => {
  try {
    const response = await axios.post(baseUrl, doctor);
    return response.data;
  } catch (error) {
    console.error('Error creating doctor:', error);
    throw error;
  }
};

// Add other CRUD operations related to doctors here

const doctorService = {
  getAllDoctors,
  createDoctor,
  // Add other CRUD operations
};

export default doctorService;
