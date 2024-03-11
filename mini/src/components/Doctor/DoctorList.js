// DoctorList.js

import React, { useEffect, useState } from 'react';
import ApiService from '../services/apiService';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await ApiService.getAllDoctors();
      setDoctors(response);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
