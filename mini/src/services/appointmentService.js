// import axios from 'axios';

// const baseUrl = '/api/appointments';

// const getAllAppointments = async () => {
//   try {
//     const response = await axios.get(baseUrl);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching appointments:', error);
//     throw error;
//   }
// };

// const getAppointmentById = async (id) => {
//   try {
//     const response = await axios.get(`${baseUrl}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching appointment by ID:', error);
//     throw error;
//   }
// };

// const createAppointment = async (appointment) => {
//   try {
//     const response = await axios.post(baseUrl, appointment);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating appointment:', error);
//     throw error;
//   }
// };

// const updateAppointment = async (id, appointmentDetails) => {
//   try {
//     const response = await axios.put(`${baseUrl}/${id}`, appointmentDetails);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating appointment:', error);
//     throw error;
//   }
// };

// const deleteAppointment = async (id) => {
//   try {
//     await axios.delete(`${baseUrl}/${id}`);
//   } catch (error) {
//     console.error('Error deleting appointment:', error);
//     throw error;
//   }
// };

// // Add other CRUD operations as needed

// const appointmentService = {
//   getAllAppointments,
//   getAppointmentById,
//   createAppointment,
//   updateAppointment,
//   deleteAppointment,
// };

// export default appointmentService;


import axios from 'axios';

const baseUrl = '/api/appointments';

const getAllAppointments = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

const getAppointmentById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching appointment by ID:', error);
    throw error;
  }
};

const createAppointment = async (appointment) => {
  try {
    const response = await axios.post(baseUrl, appointment);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

const updateAppointment = async (id, appointmentDetails) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, appointmentDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating appointment:', error);
    throw error;
  }
};

const deleteAppointment = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
};

const getAppointmentsByDoctorId = async (doctorId) => {
  try {
    const response = await axios.get(`${baseUrl}/doctor/${doctorId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments by doctor ID:', error);
    throw error;
  }
};

const getAppointmentsByPatientId = async (patientId) => {
  try {
    const response = await axios.get(`${baseUrl}/patient/${patientId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments by patient ID:', error);
    throw error;
  }
};

// Add other CRUD operations as needed

const appointmentService = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByDoctorId,
  getAppointmentsByPatientId,
  // Add other CRUD operations
};

export default appointmentService;
