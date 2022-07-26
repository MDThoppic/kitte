import React from 'react'
// import Booking from './Booking'
// import { useNavigate } from 'react-router'

function Home() {
  // const navigate=useNavigate();

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
        <button id='alert' onClick={Booking}>Book</button>
      </div>
      <dialog open={true}>
        <box >
          <h4>Number Adding</h4>
          <input type="number" placeholder='Phone no' required="10number"/>
        </box>
      </dialog>
      
    </div>
  )
}

export default Home
