import React, { useState } from "react";
import { ApiService } from "./ApiService";

const AppointmentForm = () => {
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
    <div className="appointment-form">
      <h2>Create Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="doctorId">Doctor ID:</label>
          <input
            type="text"
            id="doctorId"
            name="doctorId"
            value={appointmentData.doctorId}
            onChange={handleChange}
            placeholder="Enter Doctor ID"
          />
        </div>
        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={appointmentData.patientId}
            onChange={handleChange}
            placeholder="Enter Patient ID"
          />
        </div>
        <div>
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input
            type="text"
            id="appointmentTime"
            name="appointmentTime"
            value={appointmentData.appointmentTime}
            onChange={handleChange}
            placeholder="Enter Appointment Time"
          />
        </div>
        <div>
          <label htmlFor="dateOfAppointment">Date of Appointment:</label>
          <input
            type="text"
            id="dateOfAppointment"
            name="dateOfAppointment"
            value={appointmentData.dateOfAppointment}
            onChange={handleChange}
            placeholder="Enter Date of Appointment"
          />
        </div>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={appointmentData.patientName}
            onChange={handleChange}
            placeholder="Enter Patient Name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
