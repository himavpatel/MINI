import axios from 'axios';

const baseUrl = '/api/patients';

const getAllPatients = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

const createPatient = async (patient) => {
  try {
    const response = await axios.post(baseUrl, patient);
    return response.data;
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};

// Add other CRUD operations as needed

const PatientService = {
  getAllPatients,
  createPatient,
  // Add other CRUD operations here
};

export default PatientService;
