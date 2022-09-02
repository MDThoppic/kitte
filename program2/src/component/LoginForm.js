import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Dashboard from '../pages/Dashboard';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';


const LoginForm = () => {

  // let loginurl = ("http://localhost:3000/login")

  // useEffect(() => {
  //   if (localStorage.getItem('user-info')) {

  //     navigate('/Dashborad');

  //   }
  // }, [])

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const navigate = useNavigate();
  // const  history  = useHistory();


  const handleValidation = (event) => {
    let formIsValid = true;
    console.log("hello");


    if (!email.match(/^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z0-9]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    console.log(email, password);
    // signsubmit();

    // history.push("/Dashboard"); 
    return formIsValid;

  };

  const signsubmit = async () => {
    alert("welcome to picker")
    let item = { email, password };
    let result = await fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        "context-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.JSON();
    localStorage.setItem(JSON.stringify(result))
    navigate("/Dashborad");
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();

  }

  return (

    <div className="">

      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5  p-5 m-5 border">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group m-0">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control "
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div><br />
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div><br />
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me </label>
              </div><br />
              <button type="submit" className="btn btn-primary d-flex flex-row-reverse">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;