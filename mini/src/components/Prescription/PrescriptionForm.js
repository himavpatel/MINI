import React, { useState } from 'react';
import PrescriptionService from '../services/prescriptionService';

const PrescriptionForm = () => {
  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [medications, setMedications] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPrescription = {
      patientId,
      doctorId,
      medications,
      instructions,
    };
    try {
      await PrescriptionService.createPrescription(newPrescription);
      setPatientId('');
      setDoctorId('');
      setMedications('');
      setInstructions('');
    } catch (error) {
      console.error('Error creating prescription:', error);
    }
  };

  return (
    <div>
      <h2>Add New Prescription</h2>
      <form onSubmit={handleSubmit}>
        <label>Patient ID:</label>
        <input type="number" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
        <label>Doctor ID:</label>
        <input type="number" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
        <label>Medications:</label>
        <input type="text" value={medications} onChange={(e) => setMedications(e.target.value)} />
        <label>Instructions:</label>
        <input type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
