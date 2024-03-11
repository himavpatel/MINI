import React, { useState } from "react";
import ApiService from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({
    doctorId: "",
    patientId: "",
    appointmentTime: "",
    dateOfAppointment: "",
    patientName: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.createAppointment(appointmentData);
      alert("Appointment created successfully!");
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Error creating appointment. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  return (
    <div className="patient-form">
      <h2>Create Appointment</h2>
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="doctorId">Doctor ID:</label><br></br>
          <input type="text" id="doctorId" name="doctorId" value={appointmentData.doctorId} onChange={handleChange} placeholder="Enter Doctor ID" />
        
       
          <label htmlFor="patientId">Patient ID:</label><br></br>
          <input type="text" id="patientId" name="patientId" value={appointmentData.patientId} onChange={handleChange} placeholder="Enter Patient ID" />
       
          <label htmlFor="appointmentTime">Appointment Time:</label><br></br>
          <input type="time" id="appointmentTime" name="appointmentTime" value={appointmentData.appointmentTime} onChange={handleChange}  placeholder="Enter Appointment Time"/>
        
          <label htmlFor="dateOfAppointment">Date of Appointment:</label><br></br>
          <input type="date" id="dateOfAppointment" name="dateOfAppointment" value={appointmentData.dateOfAppointment} onChange={handleChange} placeholder="Enter Date of Appointment"  />
        
          <label htmlFor="patientName">Patient Name:</label><br></br>
          <input  type="text"id="patientName" name="patientName" value={appointmentData.patientName}  onChange={handleChange}  placeholder="Enter Patient Name"  />
        
        <nav>
            <button className="button" onClick={()=> navigate ("/AppointmentList")}>Sumbit</button>
        </nav>
      </form>
    </div>
  );
};

export default AppointmentForm;
