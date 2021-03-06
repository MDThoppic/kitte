import React, { useState } from 'react'

// import { Axios } from 'axios';
// import JSON from '../../db.json';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno]=useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 

  const handleSubmit  =() => {

    
    alert("OTP verifed");

  //   console.log(firstName,lastName,email,phoneno,password,confirmPassword);

  //   fetch('../../db.json',{
  //     firstName,lastName,email,password,confirmPassword
  // }).then(()=>{
  //     setFirstName("");
  //     setLastName("");
  //     setEmail("");
  //     setPassword("");
  //     setConfirmPassword("");
  // },[]).catch((err)=>{
  //     console.log(err);
  // })
}

  return (
    <div className="form">
      <h1>Register From</h1>
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">First Name :</label>
          <input className="form__input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" placeholder="First Name" />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">Last Name :</label>
          <input type="text" name="" value={lastName} onChange={(e) =>setLastName(e.target.value)} id="lastName" className="form__input" placeholder="LastName" required/>
        </div>
        <div className="email">
          <label className="form__label" for="email">Email  :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form__input" placeholder="example@.com" required/>
        </div>
        <div className="phoneno">
          <label className="form__label" for="phoneno">Phoneno :</label>
          <input type="number" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} id="phoneno" className="form__input" placeholder="Phoneno" maxLength={10} required/>
        </div>
        <div className="password">
          <label className="form__label" for="password">Password :</label>
          <input className="form__input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" required/>
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">Confirm Password :</label>
          <input className="form__input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" placeholder="Confirm Password" required />
        </div>
      </div>
      <div className="Register">
        <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>
      </div>
    </div>
  )
}

export default Register
