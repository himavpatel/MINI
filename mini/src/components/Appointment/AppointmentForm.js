// AppointmentForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './AppointmentForm.css';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [dateOfAppointment, setDateOfAppointment] = useState('');
  const [patientName, setPatientName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!doctorId || !patientId || !appointmentTime || !dateOfAppointment || !patientName) {
      console.error('All fields are required.');
      return;
    }

    const appointment = { doctorId, patientId, appointmentTime, dateOfAppointment, patientName };

    try {
      const response = await ApiService.createAppointment(appointment);
      console.log('Appointment added:', response.data);
      // setDoctorId('');
      // setPatientId('');
      // setAppointmentTime('');
      // setDateOfAppointment('');
      // setPatientName('');
      navigate('/AppointmentList'); // Navigate to the appointment list page
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div className="appointment-form">
      <h1>Add New Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>Doctor ID:</label><br />
        <input type="text" placeholder="Doctor ID" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} /><br />
        <label>Patient ID:</label><br />
        <input type="text" placeholder="Patient ID" value={patientId} onChange={(e) => setPatientId(e.target.value)} /><br />
        <label>Appointment Time:</label><br />
        <input type="time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} /><br />
        <label>Date of Appointment:</label><br />
        <input type="date" value={dateOfAppointment} onChange={(e) => setDateOfAppointment(e.target.value)} /><br />
        <label>Patient Name:</label><br />
        <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} /><br />
        <button className="button" type="submit">Add Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
