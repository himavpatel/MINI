import React, { useState } from 'react';
import PatientService from '../services/PatientService';
import './PatientForm.css';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const patient = { name, age, gender, phoneNumber, emailId };
      await PatientService.createPatient(patient);
      // Optionally, reset form fields after successful submission
      setName('');
      setAge('');
      setGender('');
      setPhoneNumber('');
      setEmailId('');
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  return (
    <div className="patient-form">
      <h1>Add New Patient</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input type="email" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
