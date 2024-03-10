import React from "react";

const Appointment = ({ appointment }) => {
  return (
    <div className="appointment">
      <h3>Appointment ID: {appointment.id}</h3>
      <p>Doctor ID: {appointment.doctorId}</p>
      <p>Patient ID: {appointment.patientId}</p>
      <p>Appointment Time: {appointment.appointmentTime}</p>
      <p>Date of Appointment: {appointment.dateOfAppointment}</p>
      <p>Patient Name: {appointment.patientName}</p>
    </div>
  );
};

export default Appointment;
