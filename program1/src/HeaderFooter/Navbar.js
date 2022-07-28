import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from "./Footer";


function Navbar() {
  return (
    <div>
        
        <nav className='nav'>
            <h1 className='nav_name'>Pickaar</h1>
           
                 
            <ul className='nav_menu'>
               
            <NavLink className="link  rounded-pill" to="/">Home</NavLink>
            <NavLink className="link rounded-pill" to="/About">About</NavLink>
            <NavLink className="link rounded-pill" to="/Support">Support</NavLink>
            <NavLink className="link rounded-pill" to="/Login">Signin </NavLink>

            <input type="search" placeholder='search...' name="search" id="search" /><button type="submit"><i class="fa fa-search"></i></button>
            
            </ul>
            
        </nav>
        <Footer />
    </div>    
    
  );
}

export default Navbar;
