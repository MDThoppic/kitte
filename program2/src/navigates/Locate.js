import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Singin from '../component/Singin';


export default function Locate() {
  return (
    <div><Routes>
    <Route path='/vender/newuser/user' element={<Singin />}/>
  </Routes></div>
  )
}
