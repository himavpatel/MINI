import React, { useState } from 'react';
import ApiService from '../services/ApiService';
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
     
    };
    try {
      const response = await ApiService.createDoctor(newDoctor);
      console.log("Doctor added",response.data);
      // setName('');
      // setSpecialization('');
      // setExperience('');
      // setPhoneNumber('');
      // setEmailId('');
      navigate('/doctors'); 
    } catch (error) {
      console.error('Error creating doctor:', error);
    }
  };

  return (
    <div className="doctor-form">
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label>Specialization:</label><br />
        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} /><br />
        <label>Experience:</label><br />
        <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} /><br />
        <label>Phone Number:</label><br />
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br />
        <label>Email ID:</label><br />
        <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} /><br />
        <button className="button" type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default DoctorForm;
