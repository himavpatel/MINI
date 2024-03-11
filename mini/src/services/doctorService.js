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

const getDoctorById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctor by ID:', error);
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

const updateDoctor = async (id, doctorDetails) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, doctorDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating doctor:', error);
    throw error;
  }
};

const deleteDoctor = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error('Error deleting doctor:', error);
    throw error;
  }
};

const getDoctorsBySpecialization = async (specialization) => {
  try {
    const response = await axios.get(`${baseUrl}/specialization/${specialization}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors by specialization:', error);
    throw error;
  }
};

const getDoctorsByExperienceGreaterThan = async (experience) => {
  try {
    const response = await axios.get(`${baseUrl}/experience/${experience}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors by experience greater than:', error);
    throw error;
  }
};

// Add other CRUD operations as needed

const doctorService = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorsBySpecialization,
  getDoctorsByExperienceGreaterThan,
  // Add other CRUD operations
};

export default doctorService;
