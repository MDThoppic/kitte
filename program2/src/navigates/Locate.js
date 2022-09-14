import React from 'react'
import { Route, Routes } from 'react-router-dom';
import User from '../component/User';


export default function Locate() {
  return (
    <div>
      <Routes>
        <Route path='/vender/newuser/user' element={<User />} />
      </Routes>
    </div>
  )
}
