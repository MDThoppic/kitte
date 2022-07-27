import React, { useState } from 'react'
import '../compoent/Home.css';
// import 'bootstrap';
// import Booking from './Booking'
// import { useNavigate } from 'react-router'

function Home() {
  // const navigate=useNavigate();

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
    // alert("welcome")
    // navigate('/Booking');
  }
  return (
    <div className='homebody'>
      <div className="booking">
        <h2> See the world with your own two eyes</h2>
        <h3> Keep calm and never stop travelling</h3>
        <button id='alert' onClick={openDialog}>Book</button>
      </div>
      <dialog open={showDia} onClose={closeDialog}>
        <box >
          <h4>Number Adding</h4>

          <input type="number" placeholder='Phone no' required />
          <label>Resend OTP</label>
          {otp.map(() => {
            return (
              <input className="otpinput" maxLength="1" type="number" placeholder='0' required />
            )
          })}

          <dialogaction> <button>verify</button>
            <button onClick={closeDialog}>Cancel</button>
          </dialogaction>
        </box>
      </dialog>

    </div>
  )
}

export default Home
