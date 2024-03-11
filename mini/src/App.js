import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home/Home.js';
import Appointment from './components/Appointment/Appointment.js';
import AppointmentList from './components/Appointment/AppointmentList.js';
import AppointmentForm from './components/Appointment/AppointmentForm.js';

import Prescription from './components/Prescription/Prescription.js';
import PrescriptionList from './components/Prescription/PrescriptionList.js';
import PrescriptionForm from './components/Prescription/PrescriptionForm.js';

import Doctor from './components/Doctor/Doctor.js';
import DoctorList from './components/Doctor/DoctorList.js';
import DoctorForm from './components/Doctor/DoctorForm.js';

import Patient from './components/Patient/Patient.js';
import  PatientList from './components/Patient/PatientList.js';
import  PatientForm from './components/Patient/PatientForm.js';

import Bill from './components/Bill/Bill.js';
import BillList from './components/Bill/BillList.js';
import BillForm from './components/Bill/BillForm.js';

import ApiService from './components/services/apiService';
const App = () => {
  return (
     
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/Home" element={<Home/>}></Route>
       <Route path="/Appointment" element={<Appointment/>}></Route>
       <Route path="/AppointmentList" element={<AppointmentList />}></Route>
       <Route path="/AppointmentForm" element={<AppointmentForm />}></Route>
       {/* <Route path="/AppointmentService" element={<AppointmentService />}></Route> */}
       <Route path="/Prescription" element={<Prescription/>}></Route>
       <Route path="/PrescriptionList" element={<PrescriptionList />}></Route>
       <Route path="/PrescriptionForm" element={<PrescriptionForm />}></Route>
       {/* <Route path="/PrescriptionService" element={<PrescriptionService />}></Route> */}
       <Route path="/Patient" element={<Patient/>}></Route>
       <Route path="/PatientList" element={<PatientList />}></Route>
       <Route path="/PatientForm" element={<PatientForm />}></Route>
       {/* <Route path="/PatientService" element={<PatientService />}></Route> */}
       <Route path="/Doctor" element={<Doctor/>}></Route>
       <Route path="/DoctorList" element={<DoctorList />}></Route>
       <Route path="/DoctorForm" element={<DoctorForm />}></Route>
       {/* <Route path="/DoctorService" element={<DoctorService />}></Route> */}
       <Route path="/Bill" element={<Bill/>}></Route>
       <Route path="/BillList" element={<BillList />}></Route>
       <Route path="/BillForm" element={<BillForm />}></Route>
       {/* <Route path="/BillService" element={<BillService />}></Route> */}
       <Route path="/ApiService" element={<ApiService />}></Route>
     </Routes>
   </BrowserRouter>
 </div>
    
  );
}; 

export default App;
