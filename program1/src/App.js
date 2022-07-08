import React from 'react' //import logo from './logo.svg';
import './App.css';
import './index.css';
import './compoent/Login.css';
import './HeaderFooter/Navbar.css';
import { Footer } from "./HeaderFooter/Footer";
import Navbar from './HeaderFooter/Navbar';
import Home from  './Pages/Home';
import About from './Pages/About';
import Support from './Pages/Support';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';


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
      </Routes>
      <Footer /> 
    </div>
  );


}
export default App;
