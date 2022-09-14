
import React, { useState } from 'react';
import Header from '../component/Nav';
import axios from 'axios';

export default function Dashboard() {

  const [data, setdatas] = useState({ values });
  
  let log_URL1 = ("http://localhost:8000/Booking");

  const [Checked, setChecked] = useState(false);

  const values = {
    from: "",
    to: "",
    date: '',
    time: '',
    phone: '',
    name: "",
    women: '',
    Comment: ''
  }

  
  let bookingdata = async (e) => {

    console.log(data);
    await axios.post(log_URL1, {
      data
    })
      .then((res) => {
        console.log(res.data)
        alert('successfull Booking')
      })
      .catch((error) => console.log(error))

  }

  const Datahandle = (e) => {
    // e.preventDefault();

    console.log(data);
    bookingdata();

  }
  const changeHolder = e => {
    setdatas({
      data,
      [e.target.name]:
        e.target.value
    });

  }

  return (
    <div>
      <Header />

      <div className="container m-4 ">
        <div className="row d-flex justify-content-left">
          <div className="col-md-5  p-4 m-5 border">
            <form className='' >
              <h3 className='text-center '>BOOKING</h3>
              <div className="mb-3">
                <label>---------PickupAddress---------</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="From"
                  name='from'
                  onChange={changeHolder}
                  required="enter"
                />
              </div>
              <div className="mb-3">
                <label>---------DropAddress-----------</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TO"
                  name='to'
                  onChange={changeHolder}
                  required="enter"
                />
              </div>
              <div className="mb-3">
                <label>Select Pickup Date & Time</label>
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  className="me-4"
                  placeholder=""
                  name='date'
                  required="enter"
                  onChange={changeHolder}
                />
                <input
                  type="time"
                  className=""
                  placeholder=""
                  name='time'
                  required="enter"
                  onChange={changeHolder} />
              </div>
              <div>
                <div className="mb-3">
                  <label>Select Trip Type</label>
                </div>
                <div className='mb-3 text-center btn-group btn-group-md '>
                  <button type="button" className=" ">
                    one way
                  </button>
                  <button type="button" className=" " >
                    Round
                  </button>
                  <div id="return" className='collapse'>
                    <input
                      type="date"
                      className="me-4"
                      placeholder=""
                      required="enter"

                    // onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                </div>
              </div>
              <div className='text-center'>
                <label className='me-3'>from---to</label>
                <label>TO===From</label>
              </div>
              <div className='mb-3 '>
                <label>Select Vehice Type</label>
                <div className='mt-3 d-flex '>

                  <div className='card' style={{ display: "inline-block", width: "80px", height: "90px", margin: "6px" }}>
                    <img className='card-img-top' src='' alt='card image' style={{ width: "100%" }} />
                    <div className='card-body'>
                      <h6 className='card-title'>Auto</h6>

                    </div>
                  </div>
                  <div className='card' style={{ display: "inline-block", width: "80px", height: "90px", margin: "6px" }}>
                    <img className='card-img-top' src='' alt='card image' style={{ width: "100%" }} />
                    <div className='card-body'>
                      <h6 className='card-title'>suv</h6>

                    </div>
                  </div>
                  <div className='card' style={{ display: "inline-block", width: "80px", height: "90px", margin: "6px" }}>
                    <img className='card-img-top' src='' alt='card image' style={{ width: "100%" }} />
                    <div className='card-body'>
                      <h6 className='card-title'>Sedan</h6>
                    </div>
                  </div>
                  <div className='card' style={{ display: "inline-block", width: "80px", height: "90px", margin: "6px" }}>
                    <img className='card-img-top' src='' alt='card image' style={{ width: "100%" }} />
                    <div className='card-body'>
                      <h6 className='card-title'>Muv</h6>
                    </div>
                  </div>
                  <div className='card' style={{ display: "inline-block", width: "80px", height: "90px", margin: "6px" }}>
                    <img className='card-img-top' src='' alt='card image' style={{ width: "100%" }} />
                    <div className='card-body'>
                      <h6 className='card-title'>Muv</h6>
                    </div>
                  </div>
                </div>
                <label>seaters:5</label>
              </div>
              <div className='mt-3 '>
                <input type="text"
                  placeholder="comment"
                  className="form-control border-0 border-bottom border-dark"
                  name='comment'
                  onChange={changeHolder}
                  required="enter"
                />
              </div>
              <div className='mt-3 '>
                <input type="checkbox"
                  placeholder=""
                  className=" m-2"
                  name='women'
                  onChange={changeHolder}
                  required="enter"
                />
                <label>Single Women</label>
                <span className='h7'>(additional safty)</span>
              </div>
              <div className='mt-3 '>
                <input type="checkbox"
                  placeholder=""
                  className="m-2"
                  value={Checked}
                  onChange={() => setChecked(!Checked)}
                  required="enter"
                />
                <label>Booking
                  for close one</label>
                {
                  Checked ?
                    <div className='border m-3'>
                      <div className=' m-5'>
                        <input type="number"
                          className='form-control'
                          placeholder='Enter his/her Phone number'
                          name='phone'
                          onChange={changeHolder}
                          required="enter"
                        />
                        <input type="text"
                          className="form-control mt-4"
                          placeholder='Enter his/her Name'
                          name='name'
                          onChange={changeHolder}
                          required="enter"
                        />
                      </div>
                    </div> : null
                }
              </div>
              <div className="d-grid mt-5">
                <button type="submit" className="btn btn-primary" onClick={Datahandle}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5  p-5 m-5 border text-center">
            <h3>BOOKING STATUS</h3>
            <div className="mb-3">

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
