import React, { useState } from 'react'
// import '../compoent/Home.css';
// import 'bootstrap';
// import Booking from './Booking'
import { Routes, Route, useNavigate } from 'react-router'

function Home() {
  // location change 
  const navigate = useNavigate();

  // OTP input box 
  const [otp, setotp] = useState(new Array(4).fill(""));

  //Dialog 
  const [showDia, setshowDia] = useState(false);

  const openDialog = () => {
    setshowDia(true);

  }
  const closeDialog = () => setshowDia(false);


  // navigate the booking page
  const Booking = () => {

    alert("welcome")
    navigate('/Booking');
  }
  return (
    <div className=''>
      <div className="booking position-absolute"
        style={{
          "padding": "40px",
          "width": "400px",
          "top": "50%",
          "left": "60%",
          "text-color":"white",
          "transform": "translate(-140%,-50%)",
          "background": "rgba(12, 12, 12, 0.459)",
          "border-radius": "12px",
          "box-shadow": " 0 15px 25px rgba(0,0,0,.5)",
         
        }}>
        <h2> See the world with your own two eyes</h2>
        <h3> Keep calm and never stop travelling</h3>
        <button className='text-center btn btn-secondary ' id='alert' onClick={openDialog}>Book</button>
      </div>
      {/* <div className=' '> */}
      <dialog className="bg-white text-dark position-absolute start-50 modal-dialog pb-5 ps-5 pe-5 " open={showDia} onClose={closeDialog}>
        <box >
          <div className='modal-header'>
            <h4 className='modal-title'>Number Adding</h4>
            <button type='button' className='btn-close '  onClick={closeDialog} />
          </div>
          <div className='modal-body d-grid '>
            <input className="form-control-lg " type='number' placeholder='Phone no' name="Phone no" required />
            <div className='invalid-feedback'>place enter the fileld.</div>
          </div>
          <div>
            {otp.map(() => {
              return (
                <input className="otpinput  flex-row" maxLength="1" type="number" placeholder='0' required />
              )
            })}
            <br />
            <label className='m-3'>Resend OTP</label>
          </div>
          <div className='d-flex flex-row modal-footer'>
            <button className="text-center p-10 m-10 btn btn-success" onClick={Booking}>verify</button>
            <button className="text-center p-10 m-10 btn btn-secondary" onClick={closeDialog}>Cancel</button>
          </div>
        </box>
      </dialog>
      
      {/* <Routes>
        <Route path='/Booking' element={<Booking />} />
      </Routes> */}


    </div >
  )
}

export default Home
