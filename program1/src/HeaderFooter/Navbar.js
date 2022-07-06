import React from 'react';
import { Footer } from "./Footer";


function Navbar() {
  return (
    <div>
        
        <nav className='nav'>
            <h1 className='nav_name'>Picker</h1>
           
                 
            <ul className='nav_menu'>
               <a href="C:\Users\ELCOT\kitte\program1\src\Pages\Home.js" className='nav_link'>Home</a> 
                
               <a href="#" className='nav_link'>About</a> 
                
               <a href="#" className='nav_link'>Support</a> 
               
            <input type="search" placeholder='search...' name="search" id="search" className='fa fa-search'/><button type="submit"><i class="fa fa-search"></i></button>
            
            </ul>
            
        </nav>
        <Footer />
    </div>    
    
  );
}

export default Navbar;
