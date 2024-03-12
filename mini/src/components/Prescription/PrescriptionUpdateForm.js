// import React from 'react';

// const Prescription = ({ prescription }) => {
//   return (
//     <div>
//       <h3>Prescription Details</h3>
//       <p>ID: {prescription.id}</p>
//       <p>Patient ID: {prescription.patientId}</p>
//       <p>Doctor ID: {prescription.doctorId}</p>
//       <p>Medications: {prescription.medications}</p>
//       <p>Instructions: {prescription.instructions}</p>
//     </div>
//   );
// };

// export default Prescription;
import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './Patient/PatientList.css';

const PrescriptionUpdateForm = ({ prescription, onUpdate, onClose }) => {
  const [updatedPrescription, setUpdatedPrescription] = useState({ ...prescription });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPrescription({ ...updatedPrescription, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.updatePrescription(prescription.id, updatedPrescription);
      onUpdate(response.data); // Update the prescription in the list
      onClose(); // Close the update form after successful update
    } catch (error) {
      console.error('Error updating prescription:', error);
    }
  };

  return (
    <div className='patient-update'>
      <h3>Update Prescription Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Patient ID:</label>
        <input type="text" name="patientId" value={updatedPrescription.patientId} onChange={handleChange} />
        
        <label>Doctor ID:</label>
        <input type="text" name="doctorId" value={updatedPrescription.doctorId} onChange={handleChange} />
        
        <label>Medications:</label>
        <textarea name="medications" value={updatedPrescription.medications} onChange={handleChange} />
        
        <label>Instructions:</label>
        <textarea name="instructions" value={updatedPrescription.instructions} onChange={handleChange} />
        
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button> {/* Add cancel button */}
      </form>
    </div>
  );
};

export default PrescriptionUpdateForm;
