import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './Patient/PatientList.css';

const DoctorUpdateForm = ({ doctor, onUpdate, onClose }) => {
  const [updatedDoctor, setUpdatedDoctor] = useState({ ...doctor });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDoctor({ ...updatedDoctor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.updateDoctor(doctor.id, updatedDoctor);
      onUpdate(response.data); // Update the doctor in the list
      onClose(); // Close the update form after successful update
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  return (
    <div className='patient-update'>
      <h3>Update Doctor Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={updatedDoctor.name} onChange={handleChange} />
        
        <label>Specialization:</label>
        <input type="text" name="specialization" value={updatedDoctor.specialization} onChange={handleChange} />
        
        <label>Experience:</label>
        <input type="number" name="experience" value={updatedDoctor.experience} onChange={handleChange} />
        
        <label>Email ID:</label>
        <input type="email" name="emailId" value={updatedDoctor.emailId} onChange={handleChange} />
        
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={updatedDoctor.phoneNumber} onChange={handleChange} />
        
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button> {/* Add cancel button */}
      </form>
    </div>
  );
};

export default DoctorUpdateForm;

