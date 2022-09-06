<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 50419666effcad38227e99aa673f871b7dc2e274
import Routers from '../navigates/Ways'
import Header from '../component/Nav';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Locate from '../navigates/Locate';

export default function Dashboard() {

const{Checked,setChecked}=useState("true")

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <div className="container m-4 ">
        <div className="row d-flex justify-content-left">
          <div className="col-md-5  p-4 m-5 border">
            <form className='' onClick=''>
              <h3 className='text-center '>BOOKING</h3>
              <div className="mb-3">
                <label>---------PickupAddress---------</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="From"
                // onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>---------DropAddress-----------</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TO"
                // onChange={(event) => setEmail(event.target.value)}
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
                // onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="time"
                  className=""
                  placeholder=""
                // onChange={(event) => setEmail(event.target.value)}
                />
              </div>
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
                  // onChange={(event) => setEmail(event.target.value)}
                  />
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
                <input type="text" placeholder="comment" className="form-control border-0 border-bottom border-dark" />
              </div>
              <div className='mt-3 '>
                <input type="checkbox" placeholder="" className=" m-2" />
                <label>Single Women</label>
                <span className='h7'>(additional safty)</span>
              </div>
              <div className='mt-3 '>
                <input type="checkbox" placeholder="" className="m-2"  onChange={()=>setChecked(!Checked)} />
                <label>Booking for close one</label>
                {
                  show?
                  <input type="text" />
                  :null
                }
              </div>
              <div className="d-grid mt-5">
                <button type="submit" className="btn btn-primary">
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
=======
      <p>Hello world</p>
>>>>>>> 50419666effcad38227e99aa673f871b7dc2e274
    </div>
  )
}
