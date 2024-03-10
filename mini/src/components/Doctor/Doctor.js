// Doctor.js

import React from 'react';

const Doctor = ({ doctor }) => {
  return (
    <div>
      <h2>Doctor Details</h2>
      <p>Name: {doctor.name}</p>
      <p>Specialization: {doctor.specialization}</p>
      <p>Experience: {doctor.experience}</p>
      <p>Phone Number: {doctor.phoneNumber}</p>
      <p>Email ID: {doctor.emailId}</p>
      {/* Render other doctor details here */}
    </div>
  );
};

export default Doctor;
