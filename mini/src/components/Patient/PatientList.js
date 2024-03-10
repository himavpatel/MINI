import React, { useState, useEffect } from 'react';
import PatientService from '../services/PatientService';
import './PatientList.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await PatientService.getAllPatients();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="patient-list">
      <h1>Patient List</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <span>{patient.name}</span>
            <span>{patient.age}</span>
            <span>{patient.gender}</span>
            {/* Add more patient details if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
