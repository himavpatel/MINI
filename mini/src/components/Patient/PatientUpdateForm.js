import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './PatientList.css'

const PatientUpdateForm = ({ patient, onUpdate, onClose }) => {
  const [updatedPatient, setUpdatedPatient] = useState({ ...patient });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPatient({ ...updatedPatient, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.updatePatient(patient.id, updatedPatient);
      onUpdate(response.data); // Update the patient in the list
      onClose(); // Close the update form after successful update
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    <div className='patient-update'>
      <h3>Update Patient Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={updatedPatient.name} onChange={handleChange} />
        
        <label>Age:</label>
        <input type="number" name="age" value={updatedPatient.age} onChange={handleChange} />
        
        <label>Gender:</label>
        <input type="text" name="gender" value={updatedPatient.gender} onChange={handleChange} />
        
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={updatedPatient.phoneNumber} onChange={handleChange} />
        
        <label>Email ID:</label>
        <input type="email" name="emailId" value={updatedPatient.emailId} onChange={handleChange} />
        
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button> {/* Add cancel button */}
      </form>
    </div>
  );
};

export default PatientUpdateForm;
