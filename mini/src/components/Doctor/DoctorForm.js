// DoctorForm.js

import React, { useState } from 'react';
import ApiService from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const DoctorForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  // Add more state variables for other doctor properties as needed

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDoctor = {
      name,
      specialization,
      experience,
      phoneNumber,
      emailId,
      // Add more fields here
    };
    try {
      await ApiService.createDoctor(newDoctor);
      // Optionally: Reset form fields after successful submission
      setName('');
      setSpecialization('');
      setExperience('');
      setPhoneNumber('');
      setEmailId('');
      // Reset other fields as needed
    } catch (error) {
      console.error('Error creating doctor:', error);
    }
  };

  return (
    <div className="patient-form">
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br></br>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Specialization:</label><br></br>
        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        <label>Experience:</label><br></br>
        <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <label>Phone Number:</label><br></br>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <label>Email ID:</label><br></br>
        <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        {/* Add more input fields for other doctor properties */}
        <nav>
            <button className="button" onClick={()=> navigate ("/DoctorList")}>Sumbit</button>
        </nav>
      </form>
    </div>
  );
};

export default DoctorForm;
