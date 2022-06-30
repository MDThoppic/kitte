//import logo from './logo.svg';
import './App.css';
import './index.css'
import Login from "./compoent/Login";

//import { render } from '@testing-library/react';

function App() {

  //  const Validate =()=>{      
  //   var UserName = document.getElementById('UserName').value;
  //   var password = document.getElementById('password').value;
  //   if (UserName === "mohamud" && password === "123456") {
  //     alert("login sucessfully");
  //     return false;
  //   }
  //   else {
  //     alert("not valid");
  //   }         
  // }
  
  return (
    <div className='App'>
      <Login />
    </div>
  );
  
  
}



export default App;
