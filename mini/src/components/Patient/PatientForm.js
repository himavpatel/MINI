import React, { useState } from 'react';
import ApiService from '../services/apiService';
import './PatientForm.css';
import { useNavigate } from 'react-router-dom';

const PatientForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const patient = { name, age, gender, phoneNumber, emailId };
      await ApiService.createPatient(patient);
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
      <label htmlFor="Patient Name">Patient Name:</label><br></br>
      <input type="text" name= "patientName"placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="Patient Age">Patient Age:</label><br></br>
      <input type="number" name= "age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <label htmlFor="Patient Gender">Patient Gender:</label><br></br>
      <input type="text" name= "gender" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
      <label htmlFor="Patient PhoneNumber">Patient PhoneNumber:</label><br></br>
      <input type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <label htmlFor="Patient EmailID">Patient EmailID:</label><br></br>
      <input type="email" name="emailID" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        <nav>
            <button className="button" onClick={()=> navigate ("/PatientList")}>Sumbit</button>
        </nav>
      </form>
    </div>
  );
};

export default PatientForm;
