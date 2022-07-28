import React, { useState } from 'react'
import '../compoent/Home.css';
// import 'bootstrap';
// import Booking from './Booking'
import { Routes, Route,useNavigate } from 'react-router'

function Home() {
  // location change 
  const navigate=useNavigate();

  // OTP input box 
  const [otp, setotp] = useState(new Array(4).fill(""));

  //Dialog 
  const [showDia,setshowDia]=useState(false);

  const openDialog =()=>{
    setshowDia(true);
   
  }
  const closeDialog=()=> setshowDia(false);



  const Booking = () => {

    // return(
    //   <div>
    //     <input type='text' placeholder='Phoneno' value='none' required='10 number'/>
    //   </div>
    // )
    alert("welcome")
    navigate('/Booking');
  }
  return (
    <div className='homebody'>
      <div className="booking">
        <h2> See the world with your own two eyes</h2>
        <h3> Keep calm and never stop travelling</h3>
        <button id='alert' onClick={openDialog}>Book</button>
      </div>
      <dialog className="bg-dark text-white modal-dialog width=device-width was-validated" open={showDia}>
        <box >
          <div className='modal-header'>
          <h4 className='modal-title'>Number Adding</h4>
          <button type='button' className='btn-close ' data-bs-dismiss="modal" onClick={closeDialog} />
          </div>
          <div className='modal-body'>
          <input className="form-control-lg"  type="number" placeholder='Phone no' name="Phone no" required />
          <div className='invalid-feedback'>place enter the fileld.</div><br/>
          {otp.map(() => {
            return (
              <input className="otpinput  mt-4" maxLength="1" type="number" placeholder='0'  required />             
            )
          })}
           <label>Resend OTP</label>
          </div>
          <dialogaction>
             <button className="text-center p- 1 btn btn-success" onClick={Booking}>verify</button>
            <button className="text-center p-1 btn btn-secondary" onClick={closeDialog}>Cancel</button>
          </dialogaction>
        </box>
      </dialog>
      <Routes>
      <Route path='/Booking' element={<Booking />}/>
      </Routes>


    </div>
  )
}

export default Home
