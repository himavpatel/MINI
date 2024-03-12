
// import React, { useState, useEffect } from 'react';
// import ApiService from '../services/ApiService';
// import '../Patient/PatientList.css'; // Make sure to create PrescriptionList.css file for styling if needed


// const PrescriptionList = () => {
 
//   const [prescriptions, setPrescriptions] = useState([]);
 
//   const [editingPrescription, setEditingPrescription] = useState(null);

//   useEffect(() => {
    
//     const fetchPrescriptions = async () => {
//       try {
       
//         const prescriptionsData = await ApiService.getAllPrescriptions();
//         // Update the state with the fetched prescriptions
//         setPrescriptions(prescriptionsData);
//       } catch (error) {
//         console.error('Error fetching prescriptions:', error);
//       }
//     };

//     // Call the fetchPrescriptions function when the component mounts
//     fetchPrescriptions();
//   }, []);

//   // Function to handle editing a prescription
//   const startEditing = (prescription) => {
//     setEditingPrescription({ ...prescription });
//   };

//   // Function to handle canceling editing
//   const cancelEditing = () => {
//     setEditingPrescription(null);
//   };

//   // Function to handle saving edited prescription
//   const handleUpdate = async () => {
//     try {
//       await ApiService.updatePrescription(editingPrescription.id, editingPrescription);
//       // Update the prescriptions array with the edited prescription
//       const updatedPrescriptions = prescriptions.map(prescription =>
//         prescription.id === editingPrescription.id ? editingPrescription : prescription
//       );
//       setPrescriptions(updatedPrescriptions);
//       // Reset editingPrescription state
//       setEditingPrescription(null);
//     } catch (error) {
//       console.error('Failed to update prescription:', error);
//     }
//   };

//   // Function to handle deleting a prescription
//   const handleDelete = async (id) => {
//     try {
//       await ApiService.deletePrescription(id);
//       // Filter out the deleted prescription from the prescriptions array
//       const newPrescriptions = prescriptions.filter(prescription => prescription.id !== id);
//       setPrescriptions(newPrescriptions);
//     } catch (error) {
//       console.error('Failed to delete prescription:', error);
//     }
//   };

//   return (
//     <div className="patient-list">
//       <h2>Prescription List</h2>
//       {/* Render the list of prescriptions */}
//       <ul>
//         {prescriptions.map((prescription) => (
//           <li key={prescription.id}>
//             {/* If editingPrescription is not null and matches the current prescription, render editing form */}
//             {editingPrescription && editingPrescription.id === prescription.id ? (
//               <>
//                 <input
//                   name="patientId"
//                   value={editingPrescription.patientId}
//                   onChange={(e) => setEditingPrescription({ ...editingPrescription, patientId: e.target.value })}
//                 />
//                 <input
//                   name="doctorId"
//                   value={editingPrescription.doctorId}
//                   onChange={(e) => setEditingPrescription({ ...editingPrescription, doctorId: e.target.value })}
//                 />
//                 <input
//                   name="medications"
//                   value={editingPrescription.medications}
//                   onChange={(e) => setEditingPrescription({ ...editingPrescription, medications: e.target.value })}
//                 />
//                 <input
//                   name="instructions"
//                   value={editingPrescription.instructions}
//                   onChange={(e) => setEditingPrescription({ ...editingPrescription, instructions: e.target.value })}
//                 />
//                 <button onClick={handleUpdate}>Save</button>
//                 <button onClick={cancelEditing}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <div>Patient ID: {prescription.patientId}</div>
//                 <div>Doctor ID: {prescription.doctorId}</div>
//                 <div>Medications: {prescription.medications}</div>
//                 <div>Instructions: {prescription.instructions}</div>
//                 <button onClick={() => startEditing(prescription)}>Edit</button>
//                 <button onClick={() => handleDelete(prescription.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PrescriptionList;

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await ApiService.getAllPrescriptions();
      setPrescriptions(response.data);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await ApiService.deletePrescription(id);
      setPrescriptions(prescriptions.filter(prescription => prescription.id !== id));
    } catch (error) {
      console.error('Failed to delete prescription:', error);
    }
  };

  return (
    <div>
      <h2>Prescription List</h2>
      <ul>
        {prescriptions.map(prescription => (
          <li key={prescription.id}>
            {prescription.id}
            <button onClick={() => handleDelete(prescription.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrescriptionList;
