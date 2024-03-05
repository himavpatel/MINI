// ContactUs.jsx
import React from 'react';
import './ContactUs.css';
import Navbar from '../Navbar.js'

const ContactUs = () => {
  return (
    <>
    <Navbar />
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us.</p>
      <div>
        <h3>Email:</h3>
        <p>contact@example.com</p>
      </div>
      <div>
        <h3>Phone:</h3>
        <p>+1234567890</p>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
