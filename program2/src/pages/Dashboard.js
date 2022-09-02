import React from 'react';
import Routers from '../navigates/Ways'
import Header from '../component/Nav';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <p>Hello world</p>
    </div>
  )
}
