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

const getPrescriptionById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching prescription by ID:', error);
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

const updatePrescription = async (id, prescriptionDetails) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, prescriptionDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating prescription:', error);
    throw error;
  }
};

const deletePrescription = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error('Error deleting prescription:', error);
    throw error;
  }
};

// Add other CRUD operations as needed

const prescriptionService = {
  getAllPrescriptions,
  getPrescriptionById,
  createPrescription,
  updatePrescription,
  deletePrescription,
  // Add other CRUD operations
};

export default prescriptionService;
