// import { Axios } from 'axios';
// import axios from  'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import vendar from '../api/vendar.json'
// import JSON from '../../db.json';

function Register() {
  // const basefile="../api/vendar.json"
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setphone] = useState("");
  const [LicenseNo, setLicenseNo] = useState("");
  const [Address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [District, setDistrict] = useState("");
  const [Licenseexper, setLicenseexper] = useState("");
const navigate=useNavigate();
  
  let vendar=('http://localhost:8000/vendar');

async function handleSubmit(){



    // alert("OTP verifed");

      console.log(firstName,lastName,phone,LicenseNo,Address,Licenseexper,city,District);
  //     axios.get(basefile)
  // .then(res=> res.json())
  // .then(JSON=>console(JSON))

  // useEffect(()=>{
  //   loadData();
  // },[])

  //  const loadData= async() =>{
  //   const res = await Axios.get('../api/vendar.json');
  //   console.log(res.data);
  // }

  let data1={firstName,lastName,phone,LicenseNo,Licenseexper,Address,city,District};

       let result=await fetch(vendar, {
            // name:  UserName,
            // password: password
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Accept":'application/json'
            },
            body: JSON.stringify(data1),
        });
        result=await result.json();
        localStorage.setItem("",JSON.stringify(result));
        navigate('/Home')
    //   fetch(vendar,{
        
    // }).then(()=>{
    //     setFirstName("");
    //     setLastName("");
    //     setphone("");
    //     setAddress("");
    //     setLicenseexper("");
    //     setLicenseNo("");
    //     setcity("");
    //     setDistrict("");
    // },[]).catch((err)=>{
    //     console.log(err);
    // })
  }

  return (
    <div className="form ">
      <div className=' '>
        <h2 className='text-dark text-uppercase'> vender Register </h2>
      </div>
      <div className=" ms-5  ">
        <div className="input_box mt-3">
          <input className="form__input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" placeholder="" required="required" />
          <span className="form__label" for="firstName" >First Name </span>
        </div>
        <div className="input_box mt-3">
          <input type="text" name="" value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" className="form__input" placeholder="  " required />
          <span className="form__label" for="lastName">Last Name </span>
        </div>
        <div className="input_box mt-3">
          <input type="Number" value={phone} onChange={(e) => setphone(e.target.value)} id="phone" className="form__input" placeholder="" required />
          <span className="form__label" for="phone">phone No  </span>
        </div>
        <div className="input_box mt-3">
          <input type="number" value={LicenseNo} onChange={(e) => setLicenseNo(e.target.value)} id="LicenseNo" className="form__input" placeholder="" maxLength={10} required />
          <span className="form__label" for="LicenseNo">License No </span>
        </div>
        <label className='d-flex mt-2'>year-of-experence</label>
        <div className="input_box mt-1">
          <input className="" type="Date" value={Licenseexper} onChange={(e) => setLicenseexper(e.target.value)} id="Licenseexper" placeholder="" required />
          {/* <span className="form__label" for="Licenseexper"></span> */}
        </div>
        <div className="input_box mt-3">
          <input className="form__input" type="text" value={Address} onChange={(e) => setAddress(e.target.value)} id="Address" placeholder="" required />
          <span className="form__label" for="Address">Address </span>
        </div>
        <div className="input_box mt-3">
          <input className="form__input" type="text" value={city} onChange={(e) => setcity(e.target.value)} id="city" placeholder="" required />
          <span className="form__label" for="city">city </span>
        </div><div className="input_box mt-3">
          <input className="form__input" type="text" value={District} onChange={(e) => setDistrict(e.target.value)} id="District" placeholder="" required />
          <span className="form__label" for="District">District </span>
        </div>
        <div className='d-flex flex-row-reverse mt-3'>
          <button className=' text-white btn btn-success' type='submit' onClick={ handleSubmit} >Register</button>
        </div>
      </div>

      {/* <div className="text-center p-10 m-10 btn btn-success">
        <button classsName="text-center p-10 m-10 btn btn-success" onClick={() => handleSubmit()} type="submit" >Register</button>
      </div> */}
    </div>
  )
}

export default Register
