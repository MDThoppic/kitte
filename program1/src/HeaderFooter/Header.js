import React from 'react';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { Footer } from "./Footer";
import './Navbar.css';



function Header() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  console.warn(user);
  function logout() {
    localStorage.clear();
  }
  return (
    <div>
      <Navbar className='navbar  '>
        <h1 className='nav_name'>Pickaar</h1>
        <Nav className=' text-dark d-flex justify-content-end'>
          <div className='d-flex justify-content-end'>
          {
            localStorage.getItem('user-info') ?

              <>
                <NavLink className="link  rounded-pill" to="/">Home</NavLink>
                <NavLink className="link rounded-pill" to="/About">About</NavLink>
                <NavLink className="link rounded-pill" to="/Support">Support</NavLink>
                {/* <NavLink className="link rounded-pill" to="/Login">Signin </NavLink>  */}
                <input type="search" placeholder='search...' className="rounded" id="search" />
                {/* // <button className='btn btn-primary rounded' type="submit"><i class="fas fa-search"></i> search</button> */}
              </>
              :
              <>
                <NavLink className="link  rounded-pill px-2  mx-0  text-decoration-none" to="/">Home</NavLink>
                <NavLink className="link rounded-pill px-2  mx-0 text-decoration-none"  to="/About">About</NavLink>
                <NavLink className="link rounded-pill px-2  mx-0 text-decoration-none"  to="/Support">Support</NavLink>
                <NavLink className="link rounded-pill px-2  mx-0 text-decoration-none "  to="/Login">Signin </NavLink>
                <input type="search" placeholder='search...' className="rounded" id="search" />
                {/* // <button className='btn btn-primary rounded' type="submit"><i class="fas fa-search"></i> search</button> */}
              </>


          }
          </div>
        </Nav>
        <Nav>
          {
            localStorage.getItem('user-info') ?

              <NavDropdown title={user && user.UserName}>
                <NavDropdown.Item onClick={logout()}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
              : null
          }
        </Nav>

      </Navbar>

    </div >

  )
}

export default Header
