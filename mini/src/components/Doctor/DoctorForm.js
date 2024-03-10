// DoctorForm.js

import React, { useState } from 'react';
import DoctorService from '../services/DoctorService';

const DoctorForm = () => {
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
      await DoctorService.createDoctor(newDoctor);
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
    <div>
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Specialization:</label>
        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        <label>Experience:</label>
        <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <label>Email ID:</label>
        <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        {/* Add more input fields for other doctor properties */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DoctorForm;
