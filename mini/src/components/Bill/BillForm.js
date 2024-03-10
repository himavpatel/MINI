import React, { useState } from 'react';
import BillService from '../services/billService';

const BillForm = () => {
  const [amount, setAmount] = useState('');
  const [patientId, setPatientId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBill = {
      amount,
      patientId,
      // Add other fields here if needed
    };
    try {
      await BillService.createBill(newBill);
      // Reset form fields after successful submission
      setAmount('');
      setPatientId('');
      // Reset other fields as needed
    } catch (error) {
      console.error('Error creating bill:', error);
    }
  };

  return (
    <div>
      <h2>Add New Bill</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <label>Patient ID:</label>
          <input
            type="number"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder="Enter patient ID"
            required
          />
        </div>
        {/* Add other input fields for additional bill details */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BillForm;
