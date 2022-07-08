import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from "./Footer";


function Navbar() {
  return (
    <div>
        
        <nav className='nav'>
            <h1 className='nav_name'>Picker</h1>
           
                 
            <ul className='nav_menu'>
               
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/About">About</NavLink>
            <NavLink className="link" to="/Support">Support</NavLink>
            <NavLink className="link" to="/Login">Signin </NavLink>

            <input type="search" placeholder='search...' name="search" id="search" /><button type="submit"><i class="fa fa-search"></i></button>
            
            </ul>
            
        </nav>
        <Footer />
    </div>    
    
  );
}

export default Navbar;
