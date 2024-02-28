import React,{ useState } from 'react';
import './Appointment.css'
const bloodgrps=['A+ve','A-ve','B+ve','B-ve','O+ve','O-ve','AB+ve','AB-ve'];
const intialState={
    firstName:'',
    lastName:'',
   Hindi:false,
   Gujarati:false,
   English:false,
   bloodgrp:[],
}

const Appointment = () => {
    const [form,setForm]=useState(intialState);
    const handleChange=(e)=>{
        const value=e.target.type==="checkbox"?
    e.target.checked:
    e.target.value;
    setForm({...form,[e.target.name]:value});
}
const handleSelectChange=(e)=>{
     const selectedOptions=Array.from(
        e.target.selectedOptions,
        (option)=>option.value
     );
     setForm({
        ...form,
        bloodgrp:selectedOptions
     });
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form data:",form);
    return false;
}
  return (
    <div className='block'>
        <h1>Book Appointment</h1>
        <form onSubmit={handleSubmit}>
            <div className='content'>
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange}/><br/><br/>
            </div>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange}/><br/><br/>
            </div>
            <div>
                <label htmlFor='email'>Email Address:</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange}/><br/><br/>
            </div>
            <div>
                <label htmlFor='address'>Address:</label>
                <input type="text" id="address" name="address" value={form.address} onChange={handleChange}/><br/><br/>
            </div>
            <div >
                Gender:
                <input className='radio' type='radio' id='male' name='gender' value='Male' checked={form.gender==='Male'}
                onChange={handleChange}/>
                <label htmlFor='male'>Male</label>
                <input className='radio' type='radio' id='female' name='gender' value='Female' checked={form.gender==='Female'}
                onChange={handleChange}/>
                <label htmlFor='female'>Female</label>
            </div>
            
            <div >
            Languages:
            <input className='check' type="checkbox" id="hindi" name="Hindi" checked={form.Hindi} onChange={handleChange}/>
            <label htmlFor='hindi'>Hindi</label>
            <input className='check' type="checkbox" id="gujarati" name="Gujarati" checked={form.Gujarati} onChange={handleChange}/>
            <label htmlFor='gujarati'>Gujarati</label>
            <input className='check' type="checkbox" id="english" name="English" checked={form.English} onChange={handleChange}/>
            <label htmlFor='english'>English</label>
        </div>
            <div >
                <label htmlFor='interests'>Blood Group:</label>
                <select className='select'
                 multiple name="interests" id="interests" value={form.bloodgrp} onChange={handleSelectChange}>
                    {bloodgrps.map((bloodgrp)=>(
                        <option value={bloodgrp} key={bloodgrp}>
                            {bloodgrp}
                        </option>
                    ))}
                 </select>
            </div>

            <br/><button className=' button'type="submit">Submit</button>
            </div>
        </form>
        {/* <div className='form'>
            <h4>Form data</h4>
            <div>First Name:{form.firstName}</div>
            <div>Last Name:{form.lastName}</div>
            <div>Gender:{form.gender}</div>
            <div>Hindi:{""+form.Hindi}</div>
            <div>Gujarati:{""+form.Gujarati}</div>
            <div>English:{""+form.English}</div>
            <div>BloodGroup:{""+form.bloodgrp}</div>
        </div> */}
    </div>
  );
}

export default Appointment