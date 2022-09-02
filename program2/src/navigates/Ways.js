import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import {BrowserRouter} from 'react-router-dom';
import Singin from '../component/Singin';

function ways() {
  return (
    <div>
        <Routes>          
          <Route path='/' element={<Login />} />         
          <Route path='/Dashborad' element={<Dashboard />} />                   
        </Routes>
        <Routes>
          <Route path='/vender/newuser/user' element={<Singin />}/>
        </Routes>
      
    </div>
  );
}

export default ways;
