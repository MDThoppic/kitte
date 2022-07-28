import React from 'react' //import logo from './logo.svg';
import './App.css';
import './index.css';
import './compoent/Login.css';
import './HeaderFooter/Navbar.css';
import './compoent/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from "./HeaderFooter/Footer";
import Navbar from './HeaderFooter/Navbar';
import Home from  './Screen/Home';
import About from './Screen/About';
import Support from './Screen/Support';
import { Route, Routes } from 'react-router-dom';
import Login from './Screen/Login';
import Register from './Screen/Register';


function App() {

  return (
    <div className='App'> 
      
      <Navbar /> 
      {/* <Login />  */}
       
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Support' element={<Support />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Login/Register' element={<Register />}/>
      </Routes>
      <Footer /> 
    </div>
  );


}
export default App;
