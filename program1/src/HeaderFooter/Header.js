import React from 'react';
import { NavLink,Nav, Navbar } from 'react-router-dom';
import { Footer } from "./Footer";
import './Navbar.css';



function Header() {
  return (
    <div>
      <navbar className='navbar '>
        <h1 className='nav_name'>Pickaar</h1>
        <nav className='nav_menu text-dark'>
          
          
          <>
            <NavLink className="link  rounded-pill" to="/">Home</NavLink>
            <NavLink className="link rounded-pill" to="/About">About</NavLink>
            <NavLink className="link rounded-pill" to="/Support">Support</NavLink>
          </>{
          localStorage.getItem('user-info')?
          <>
            <NavLink className="link rounded-pill" to="/Login">Signin </NavLink>
            </>:
          

            <input type="search" placeholder='search...' className="rounded" id="search" />
            // <button className='btn btn-primary rounded' type="submit"><i class="fas fa-search"></i> search</button>
          }
        </nav>

      </navbar>
  
    </div >

  )
}

export default Header
