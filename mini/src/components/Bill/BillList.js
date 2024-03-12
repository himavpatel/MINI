// import React, { useState, useEffect } from 'react';
// import ApiService from '../services/ApiService';
// import Bill from './Bill';

// const BillList = () => {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   const fetchBills = async () => {
//     try {
//       const data = await ApiService.getAllBills();
//       setBills(data);
//     } catch (error) {
//       console.error('Error fetching bills:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Bill List</h2>
//       {bills.map((bill) => (
//         <Bill key={bill.id} bill={bill} />
//       ))}
//     </div>
//   );
// };

// export default BillList;

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const BillList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const response = await ApiService.getAllBills();
      setBills(response.data);
    } catch (error) {
      console.error('Error fetching bills:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await ApiService.deleteBill(id);
      setBills(bills.filter(bill => bill.id !== id));
    } catch (error) {
      console.error('Failed to delete bill:', error);
    }
  };

  return (
    <div>
      <h2>Bill List</h2>
      <ul>
        {bills.map(bill => (
          <li key={bill.id}>
            Patient ID: {bill.patientId} 
            Amount: {bill.amount}
            <button onClick={() => handleDelete(bill.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
