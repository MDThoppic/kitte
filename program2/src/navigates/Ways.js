import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import User from '../component/User';

function ways() {
  return (
    <div>
        <Routes>          
          <Route path='/' element={<Login />} />         
          <Route path='/Dashboard' element={<Dashboard />} />                   
        </Routes>
        
        <Routes>
          <Route path='/vender/newuser/user' element={<User />}/>
        </Routes>

      
    </div>
  );
}

export default ways;
