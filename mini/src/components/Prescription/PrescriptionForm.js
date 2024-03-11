import React, { useState } from 'react';
import ApiService from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const PrescriptionForm = () => {
  const navigate = useNavigate();
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
      await ApiService.createPrescription(newPrescription);
      setPatientId('');
      setDoctorId('');
      setMedications('');
      setInstructions('');
    } catch (error) {
      console.error('Error creating prescription:', error);
    }
  };

  return (
    <div className="patient-form">
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
        <nav>
            <button className="button" onClick={()=> navigate ("/PrescriptionList")}>Sumbit</button>
        </nav>
      </form>
    </div>
  );
};

export default PrescriptionForm;
