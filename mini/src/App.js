import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home/Home.js';


import AppointmentList from './components/Appointment/AppointmentList.js';
import AppointmentForm from './components/Appointment/AppointmentForm.js';


import PrescriptionList from './components/Prescription/PrescriptionList.js';
import PrescriptionForm from './components/Prescription/PrescriptionForm.js';


import DoctorList from './components/Doctor/DoctorList.js';
import DoctorForm from './components/Doctor/DoctorForm.js';

import PatientUpdateForm from './components/Patient/PatientUpdateForm.js';
import  PatientList from './components/Patient/PatientList.js';
import  PatientForm from './components/Patient/PatientForm.js';


import BillList from './components/Bill/BillList.js';
import BillForm from './components/Bill/BillForm.js';
import DoctorUpdateForm from './components/Doctor/DoctorUpdateForm.js';
import PrescriptionUpdateForm from './components/Prescription/PrescriptionUpdateForm.js';
import BillUpdateForm from './components/Bill/BillUpdateForm.js';
import AppointmentUpdateForm from './components/Appointment/AppointmentUpdateForm.js';

// import ApiService from './components/services/ApiService.js';
const App = () => {
  return (
     
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/Home" element={<Home/>}></Route>
       
       <Route path="/AppointmentList" element={<AppointmentList />}></Route>
       <Route path="/AppointmentForm" element={<AppointmentForm />}></Route>
       <Route path="/appointments/update" element={<AppointmentUpdateForm />}></Route>

       <Route path="/prescriptions" element={<PrescriptionList />}></Route>
       <Route path="/prescriptions/add" element={<PrescriptionForm />}></Route>
       <Route path="/prescriptions/update" element={<PrescriptionUpdateForm />}></Route>

       <Route path="/patients" element={<PatientList />}></Route>
       <Route path="/patients/add" element={<PatientForm />} />
       <Route path="/patients/update" element={<PatientUpdateForm />}></Route>
    
       <Route path="/doctors" element={<DoctorList />}></Route>
       <Route path="/doctors/add" element={<DoctorForm />}></Route>
       <Route path="/doctors/update" element={<DoctorUpdateForm />}></Route>

       <Route path="/bills" element={<BillList />}></Route>
       <Route path="/bills/add" element={<BillForm />}></Route>
       <Route path="/bills/update" element={<BillUpdateForm />}></Route>

       {/* <Route path="/ApiService" element={<ApiService />}></Route> */}
     </Routes>
   </BrowserRouter>
 </div>
    
  );
}; 

export default App;
