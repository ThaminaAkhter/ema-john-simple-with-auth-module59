import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const[user]=useAuthState(auth);
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [address, setAddress]=useState('');
    const [phone, setPhone]=useState('');
    const [error, setError]=useState('');
    //const navigate=useNavigate();
   
    const handleNameBlur=(event)=>{
        setName(event.target.value);
    }
    const handleAddressBlur=(event)=>{
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur=(event)=>{
        setPhone(event.target.value);
    }
    const handleCreateUser=(event)=>{
         event.preventDefault();
         const shipping={name,address,phone};
         console.log(shipping);
         }
    
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
        <div className='input-group'>
         <label htmlFor="name">Name</label>
         <input onBlur={handleNameBlur} type="name" name="" id="" required />
        </div>
        <div className='input-group'>

         <label htmlFor="email">Email</label>
         <input value={user?.email} readOnly type="email" name="" id="" required />
        </div>
        
        <div className='input-group'>
         <label htmlFor="address">Address</label>
         <input onBlur={handleAddressBlur} type="address" name="address" id="" required />
        </div>
        <div className='input-group'>
         <label htmlFor="number">Phone Number</label>
         <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" required/>
        </div>
        <p style={{color:'red'}}>{error}</p>
        
        <input className='form-submit' type="submit" value='add shipping' />
        </form>
        </div>
    </div>
    );
};

export default Shipment;