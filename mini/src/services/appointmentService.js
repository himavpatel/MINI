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
  const response = await axios.get(baseUrl);
  return response.data;
};

const getAppointmentById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createAppointment = async (appointment) => {
  const response = await axios.post(baseUrl, appointment);
  return response.data;
};

const updateAppointment = async (id, appointment) => {
  const response = await axios.put(`${baseUrl}/${id}`, appointment);
  return response.data;
};

const deleteAppointment = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

const getAppointmentsByDoctorId = async (doctorId) => {
  const response = await axios.get(`${baseUrl}/doctor/${doctorId}`);
  return response.data;
};

const getAppointmentsByPatientId = async (patientId) => {
  const response = await axios.get(`${baseUrl}/patient/${patientId}`);
  return response.data;
};

const getAppointmentsByAppointmentTimeBetween = async (startDateTime, endDateTime) => {
  const response = await axios.get(`${baseUrl}/appointmentTime?startDateTime=${startDateTime}&endDateTime=${endDateTime}`);
  return response.data;
};

const getAppointmentsByPatientNameContaining = async (patientName) => {
  const response = await axios.get(`${baseUrl}/patientName?patientName=${patientName}`);
  return response.data;
};

const getAppointmentsByDateOfAppointment = async (date) => {
  const response = await axios.get(`${baseUrl}/date?date=${date}`);
  return response.data;
};

const appointmentService = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByDoctorId,
  getAppointmentsByPatientId,
  getAppointmentsByAppointmentTimeBetween,
  getAppointmentsByPatientNameContaining,
  getAppointmentsByDateOfAppointment,
};

export default appointmentService;
