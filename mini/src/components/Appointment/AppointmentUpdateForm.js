import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './Patient/PatientList.css';

const AppointmentUpdateForm = ({ appointment, onUpdate, onClose }) => {
  const [updatedAppointment, setUpdatedAppointment] = useState({ ...appointment });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAppointment({ ...updatedAppointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.updateAppointment(appointment.id, updatedAppointment);
      onUpdate(response.data); // Update the appointment in the list
      onClose(); // Close the update form after successful update
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div className='patient-update'>
      <h3>Update Appointment Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Patient ID:</label>
        <input type="text" name="patientId" value={updatedAppointment.patientId} onChange={handleChange} />
        
        <label>Doctor ID:</label>
        <input type="text" name="doctorId" value={updatedAppointment.doctorId} onChange={handleChange} />

        <label>Date of Appointment:</label>
        <input type="date" name="dateOfAppointment" value={updatedAppointment.dateOfAppointment} onChange={handleChange} />

        <label>Patient Name:</label>
        <input type="text" name="patientName" value={updatedAppointment.patientName} onChange={handleChange} />
        
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button> {/* Add cancel button */}
      </form>
    </div>
  );
};

export default AppointmentUpdateForm;
