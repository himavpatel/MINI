import React, { useState, useEffect } from 'react';
import BillService from '../services/billService';
import Bill from './Bill';

const BillList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const data = await BillService.getAllBills();
      setBills(data);
    } catch (error) {
      console.error('Error fetching bills:', error);
    }
  };

  return (
    <div>
      <h2>Bill List</h2>
      {bills.map((bill) => (
        <Bill key={bill.id} bill={bill} />
      ))}
    </div>
  );
};

export default BillList;
