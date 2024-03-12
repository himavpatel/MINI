import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './Patient/PatientList.css';

const BillUpdateForm = ({ bill, onUpdate, onClose }) => {
  const [updatedBill, setUpdatedBill] = useState({ ...bill });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBill({ ...updatedBill, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.updateBill(bill.id, updatedBill);
      onUpdate(response.data); // Update the bill in the list
      onClose(); // Close the update form after successful update
    } catch (error) {
      console.error('Error updating bill:', error);
    }
  };

  return (
    <div className='patient-update'>
      <h3>Update Bill Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Patient ID:</label>
        <input type="text" name="patientId" value={updatedBill.patientId} onChange={handleChange} />
        
        <label>Amount:</label>
        <input type="number" name="amount" value={updatedBill.amount} onChange={handleChange} />
        
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button> {/* Add cancel button */}
      </form>
    </div>
  );
};

export default BillUpdateForm;
