// PatientForm.js - Replace `class` with `className`
import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './PatientForm.css';
import { useNavigate} from 'react-router-dom';


const PatientForm = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const patient = { name, age, gender, phoneNumber, emailId };
    try {
      const response = await ApiService.createPatient(patient);
      console.log("Patient added",response.data);
      //  setName('');
      //  setAge('');
      //  setGender('');
      //  setPhoneNumber('');
      //  setEmailId('');
      navigate('/patients');
     
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  return (
    <div className="patient-form">
      <h1>Add New Patient</h1>
      <form onSubmit={handleSubmit}>
        <label>Patient Name:</label><br />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label htmlFor="age">Patient Age:</label><br />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <label htmlFor="gender">Patient Gender:</label><br />
        <input type="text"  placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /><br />
        <label htmlFor="phoneNumber">Patient PhoneNumber:</label><br />
        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br />
        <label htmlFor="emailID">Patient EmailID:</label><br />
        <input type="email" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} /><br />
        <button className="button" type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default PatientForm;
