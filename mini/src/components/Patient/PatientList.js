import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import PatientUpdateForm from './PatientUpdateForm';
import './PatientList.css'

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null); 
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await ApiService.getAllPatients();
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await ApiService.deletePatient(id);
      setPatients(patients.filter(patient => patient.id !== id));
    } catch (error) {
      console.error('Failed to delete patient:', error);
    }
  };

  const handleUpdate = (patient) => {
    setSelectedPatient(patient); // Set the selected patient for update
  };

   const updatePatientInList = (updatedPatient) => {
     const updatedPatients = patients.map(p => (p.id === updatedPatient.id ? updatedPatient : p));
     setPatients(updatedPatients);
   };

  return (
    <div className='patient-list'>
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.name}
            <button onClick={() => handleDelete(patient.id)}>Delete</button>
            <button onClick={() => handleUpdate(patient)}>Update</button> {/* Add update button */}
          </li>
        ))}
      </ul>
      {selectedPatient && (
        <PatientUpdateForm patient={selectedPatient} onUpdate={updatePatientInList} onClose={() => setSelectedPatient(null)} /> 
      )}
    </div>
  );
};

export default PatientList;
