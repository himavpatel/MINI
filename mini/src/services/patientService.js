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

const getPatientById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching patient by ID:', error);
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

const updatePatient = async (id, patientDetails) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, patientDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating patient:', error);
    throw error;
  }
};

const deletePatient = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error('Error deleting patient:', error);
    throw error;
  }
};

const searchPatientsByName = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}/search?name=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error searching patients by name:', error);
    throw error;
  }
};

const getPatientsByAgeGreaterThan = async (age) => {
  try {
    const response = await axios.get(`${baseUrl}/age?age=${age}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients by age greater than:', error);
    throw error;
  }
};

const getPatientsByGender = async (gender) => {
  try {
    const response = await axios.get(`${baseUrl}/gender?gender=${gender}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients by gender:', error);
    throw error;
  }
};

// Add other CRUD operations as needed

const patientService = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
  searchPatientsByName,
  getPatientsByAgeGreaterThan,
  getPatientsByGender,
  // Add other CRUD operations
};

export default patientService;
