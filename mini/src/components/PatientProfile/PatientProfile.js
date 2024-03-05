import React, { useState, useRef } from 'react';
import './Appointment.css';
import axios from 'axios';
import Navbar from '../Navbar.js'

const Appointment = () => {
    const fileInputRef = useRef(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // const handleAddPhotoClick = () => {
    //     fileInputRef.current.click();
    // };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            setSelectedPhoto(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('photo', selectedPhoto);
        const formData1 = new FormData();
        const form = event.target;
        const formInputs = form.elements;
        for (let i = 0; i < formInputs.length; i++) {
            const input = formInputs[i];
            if (input.type !== 'file') {
                formData1.append(input.name, input.value);
            }
        }
        
        const formdata =  Object.fromEntries(formData1.entries());
        console.log(formdata)
        
        try {
            const response = await axios.post("http://localhost:8000/submitStudentProfile", formData, {params : formdata});
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        <Navbar/>
        <div className='body'>
        <div className='student_profile container'>
           
                <div className='student_profile form-row'>
                <div className='student_profile form-column'>
                    <div className='student_profile profile-title'>
                        <h2>Patient Profile</h2>
                    </div>
                    <br></br>
                    <label htmlFor="fullName">Full Name<span>*</span>:</label>
                    <div className="student_profile name-row">
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required/>
                    </div>
                </div>           

            </div>
            {/* <input
                type="file"
                name="photo"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
            /> */}
            <form className="student_profile student-registration-form" onSubmit={handleSubmit}>
                <div className='student_profile form-row'>
                    <div className='student_profile form-column'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder='Email' required/>
                    </div>
                </div>
                <div className='student_profile form-row'>
                    <div className='student_profile form-column'>
                        <label htmlFor="age">Age:</label>
                        <input type="number" name="age" placeholder='Age' required/>
                    </div>
                
                    <div className='student_profile form-column'>
                        <label htmlFor="birthDate">Birth Date:</label>
                        <input type="date" name="birthday" required/>
                    </div>
                </div>
                <div className='student_profile form-row'>
                    <div className='student_profile form-column'>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="number" name="phone" placeholder='Phone No.' required/>
                    </div>
                </div>
                <div className='student_profile form-row'>
                <div className='student_profile form-column'>
                        <label>Address<span>*</span>:</label>
                        <div className="student_profile address-row">
                            <input type="text" id="city" name="city" placeholder='City' required/>
                            <input type="text" id="state" name="state" placeholder='State' required/>
                            <input type="text" id="zipCode" name="zipCode" placeholder='Zip Code' required/>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
        </>
    );
}

export default Appointment;