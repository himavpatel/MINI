import React from 'react';
import './Patient.css';

const Patient = ({ patient }) => {
  return (
    <div className="patient">
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Phone Number: {patient.phoneNumber}</p>
      <p>Email: {patient.emailId}</p>
    </div>
  );
};

export default Patient;
