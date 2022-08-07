import React from 'react'


function Booking() {
  return (
    <div className='form-control position-absolute mt-sm-5 start-50 translate-middle ' style={{"width":'70%',}}  >
      <h1 className='modal-header'>Traval Booking</h1>
      <div className='m-4 d-grid' style={{"width":"40%"}}>
      <input className='ms-5' style={{"width":"70%"}} type='text'  />
      <span>From</span><br/>
      <label>-----------to-------------</label><br/>
      <input type='text' />
      <span>To</span>
      </div>

    </div>
  )
}

export default Booking
