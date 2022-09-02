import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './pages/Login';
import Header from './component/Nav';
import Dashboard from './pages/Dashboard';
import { Route, Routes} from 'react-router-dom';
import Ways from './navigates/Ways';


function App() {

  return (
    <div className="App">
        {/* <Routes>
          {/* // localStorage.getItem('user-info') ? */}
            {/* <Route path='/Dashboard' element={<Dashboard />} /> */}

            {/* // : */}
            {/* <Route path='/' element={<Login />} /> */}
        
        {/* </Routes> */} 
        <Ways />
    </div>
  );
}

export default App
