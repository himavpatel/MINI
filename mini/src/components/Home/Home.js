import React from 'react'
import Navbar from '../Navbar.js'
import './Home.css'
import image from "../assets/hospital.webp"; 
const Home = () => {
  return (
    <>
    <Navbar />
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" ,height:"680px", width:"1532px"
    }}>
      Home
    </div>
    </>
  )
}

export default Home
