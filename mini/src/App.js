import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Logout from './components/Logout/Logout.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home/Home.js';
import LoginSignup from './components/Loginsignup/Loginsignup.jsx';
import Appointment from './components/Appointment/Appointment.js';
const App = () => {
  return (
     
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/Appointment" element={<Appointment/>}></Route>
       <Route path="/LoginSignup" element={<LoginSignup />}></Route>
       <Route path="/Logout" element={<Logout />}></Route>
      
     </Routes>
   </BrowserRouter>
 </div>
    
  );
}; 

export default App;
