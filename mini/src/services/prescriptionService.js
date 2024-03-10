import axios from 'axios';

const baseUrl = '/api/prescriptions';

const getAllPrescriptions = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    throw error;
  }
};

const createPrescription = async (prescription) => {
  try {
    const response = await axios.post(baseUrl, prescription);
    return response.data;
  } catch (error) {
    console.error('Error creating prescription:', error);
    throw error;
  }
};

// Add other CRUD operations if needed

const prescriptionService = {
  getAllPrescriptions,
  createPrescription,
  // Add other CRUD operations
};

export default prescriptionService;
