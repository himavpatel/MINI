// import React, { useEffect, useState } from 'react';
// import billService from '../services/billService';

// const Bill = () => {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     // Fetch bills from the backend when the component mounts
//     billService.getAllBills()
//       .then(data => setBills(data))
//       .catch(error => console.error('Error fetching bills:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Bills</h1>
//       <ul>
//         {bills.map(bill => (
//           <li key={bill.id}>
//             <div>Bill ID: {bill.id}</div>
//             <div>Patient ID: {bill.patientId}</div>
//             <div>Amount: ${bill.amount}</div>
//             {/* Additional fields if needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Bill;

import React from 'react';

const Bill = ({ bill }) => {
  return (
    <div>
      <h3>Bill Details</h3>
      <p>ID: {bill.id}</p>
      <p>Amount: {bill.amount}</p>
      <p>Patient ID: {bill.patientId}</p>
      {/* Add other bill details here */}
    </div>
  );
};

export default Bill;
