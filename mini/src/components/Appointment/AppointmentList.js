import React, { useEffect, useState } from "react";
import ApiService from '../services/apiService';
import Appointment from "./Appointment";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.getAppointments();
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      {appointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default AppointmentList;
