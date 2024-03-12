
// import React, { useState, useEffect } from 'react';
// import ApiService from '../services/ApiService';
// import '../Patient/PatientList.css'
//  // Make sure to create DoctorList.css file for styling if needed

// const DoctorList = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [editingDoctor, setEditingDoctor] = useState(null);

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await ApiService.getAllDoctors();
//       setDoctors(response.data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await ApiService.deleteDoctor(id);
//       const newDoctors = doctors.filter(doctor => doctor.id !== id);
//       setDoctors(newDoctors);
//     } catch (error) {
//       console.error('Failed to delete doctor:', error);
//     }
//   };

//   const startEditing = (doctor) => {
//     setEditingDoctor({ ...doctor });
//   };

//   const handleEditChange = (e) => {
//     setEditingDoctor({ ...editingDoctor, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     try {
//       await ApiService.updateDoctor(editingDoctor.id, editingDoctor);
//       const updatedDoctors = doctors.map(doctor =>
//         doctor.id === editingDoctor.id ? editingDoctor : doctor
//       );
//       setDoctors(updatedDoctors);
//       setEditingDoctor(null);
//     } catch (error) {
//       console.error('Failed to update doctor:', error);
//     }
//   };

//   return (
//     <div className="patient-list">
//       <h1>Doctor List</h1>
//       <ul>
//         {doctors && doctors.length > 0 && doctors.map(doctor => (
//           <li key={doctor.id}>
//             {editingDoctor && editingDoctor.id === doctor.id ? (
//               <>
//                 <input
//                   name="name"
//                   value={editingDoctor.name}
//                   onChange={handleEditChange}
//                 />
//                 <input
//                   name="specialization"
//                   value={editingDoctor.specialization}
//                   onChange={handleEditChange}
//                 />
//                 {/* Add other fields as needed */}
//                 <button onClick={handleUpdate}>Save</button>
//                 <button onClick={() => setEditingDoctor(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <div>Name: {doctor.name}</div>
//                 <div>Specialization: {doctor.specialization}</div>
//                 {/* Add other fields as needed */}
//                 <button onClick={() => startEditing(doctor)}>Edit</button>
//                 <button onClick={() => handleDelete(doctor.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DoctorList;

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await ApiService.getAllDoctors();
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await ApiService.deleteDoctor(id);
      setDoctors(doctors.filter(doctor => doctor.id !== id));
    } catch (error) {
      console.error('Failed to delete doctor:', error);
    }
  };

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialization}
            <button onClick={() => handleDelete(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;

