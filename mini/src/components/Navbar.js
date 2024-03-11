import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <Link className="navbar-brand" to="/">
          HEALING
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
       
        <div
          className="collapse navbar-collapse left"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/AppointmentForm">
                Book Appointment Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/PatientForm">
                PatientForm
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/DoctorForm">
              DoctorForm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/PrescriptionForm">
              PrescriptionForm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/BillForm">
              BillForm
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}