import React from 'react';
import Routers from '../navigates/Routes'
import Header from '../component/Nav';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <p>Hello world</p>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  )
}
