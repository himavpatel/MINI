import React from 'react';

const Prescription = ({ prescription }) => {
  return (
    <div>
      <h3>Prescription Details</h3>
      <p>ID: {prescription.id}</p>
      <p>Patient ID: {prescription.patientId}</p>
      <p>Doctor ID: {prescription.doctorId}</p>
      <p>Medications: {prescription.medications}</p>
      <p>Instructions: {prescription.instructions}</p>
    </div>
  );
};

export default Prescription;
