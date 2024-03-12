// import React, { useState, useEffect } from 'react';
// import ApiService from '../services/ApiService';
// import '../Patient/PatientList.css';

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [editingAppointment, setEditingAppointment] = useState(null);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await ApiService.getAllAppointments();
//       setAppointments(response.data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await ApiService.deleteAppointment(id);
//       const newAppointments = appointments.filter(appointment => appointment.id !== id);
//       setAppointments(newAppointments);
//     } catch (error) {
//       console.error('Failed to delete appointment:', error);
//     }
//   };

//   const startEditing = (appointment) => {
//     setEditingAppointment({ ...appointment });
//   };

//   const handleEditChange = (e) => {
//     setEditingAppointment({ ...editingAppointment, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     try {
//       await ApiService.updateAppointment(editingAppointment.id, editingAppointment);
//       const updatedAppointments = appointments.map(appointment =>
//         appointment.id === editingAppointment.id ? editingAppointment : appointment
//       );
//       setAppointments(updatedAppointments);
//       setEditingAppointment(null);
//     } catch (error) {
//       console.error('Failed to update appointment:', error);
//     }
//   };

//   return (
//     <div className="appointment-list">
//       <h1>Appointment List</h1>
//       <ul>
//         {appointments && appointments.length > 0 && appointments.map(appointment => (
//           <li key={appointment.id}>
//             {editingAppointment && editingAppointment.id === appointment.id ? (
//               <>
//                 <input
//                   name="doctorId"
//                   value={editingAppointment.doctorId}
//                   onChange={handleEditChange}
//                 />
//                 <input
//                   name="patientId"
//                   value={editingAppointment.patientId}
//                   onChange={handleEditChange}
//                 />
//                 <input
//                   name="appointmentTime"
//                   value={editingAppointment.appointmentTime}
//                   onChange={handleEditChange}
//                 />
//                 <input
//                   name="dateOfAppointment"
//                   value={editingAppointment.dateOfAppointment}
//                   onChange={handleEditChange}
//                 />
//                 <input
//                   name="patientName"
//                   value={editingAppointment.patientName}
//                   onChange={handleEditChange}
//                 />
//                 <button onClick={handleUpdate}>Save</button>
//                 <button onClick={() => setEditingAppointment(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <div>Doctor ID: {appointment.doctorId}</div>
//                 <div>Patient ID: {appointment.patientId}</div>
//                 <div>Appointment Time: {appointment.appointmentTime}</div>
//                 <div>Date of Appointment: {appointment.dateOfAppointment}</div>
//                 <div>Patient Name: {appointment.patientName}</div>
//                 <button onClick={() => startEditing(appointment)}>Edit</button>
//                 <button onClick={() => handleDelete(appointment.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AppointmentList;

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await ApiService.getAllAppointments();
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await ApiService.deleteAppointment(id);
      setAppointments(appointments.filter(appointment => appointment.id !== id));
    } catch (error) {
      console.error('Failed to delete appointment:', error);
    }
  };

  return (
    <div>
      <h2>Appointment List</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            Doctor ID: {appointment.doctorId} - Patient ID: {appointment.patientId} - Appointment Time: {appointment.appointmentTime} - Date: {appointment.date} - Patient Name: {appointment.patientName}
            <button onClick={() => handleDelete(appointment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;

