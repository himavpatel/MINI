import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import { useNavigate } from 'react-router-dom';

const BillForm = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [patientId, setPatientId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBill = { amount,patientId, };
    try {
      const response = await ApiService.createBill(newBill);
      console.log("Bill added",response.data);
      navigate('/bills');
      // Reset form fields after successful submission
      // setAmount('');
      // setPatientId('');
      // Reset other fields as needed
    } catch (error) {
      console.error('Error creating bill:', error);
    }
  };

  return (
    <div className="patient-form">
      <h2>Add New Bill</h2>
      <form onSubmit={handleSubmit}>
    
          <label>Amount:</label><br></br>
          <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" required />
          <label>Patient ID:</label><br></br>
          <input type="number" value={patientId} onChange={(e) => setPatientId(e.target.value)}  placeholder="Enter patient ID"  required />
      
            <button className="button">Sumbit</button>
      </form>
    </div>
  );
};

export default BillForm;
