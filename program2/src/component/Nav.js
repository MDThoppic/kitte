import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/Dashboard">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Vendar" id="basic-nav-dropdown">
                                <NavDropdown title="create new user" className='dropdown dropend text-md'>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="/vender/newuser/user">newuser</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">InActive</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">Deactive</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">Active</Link></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Car" className='dropdown dropend dropright  '>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">newCar</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">CarInActive</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">carActive</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">carDeactive</Link></NavDropdown.Item>

                                </NavDropdown>
                                <NavDropdown title="wallet" className='dropdown dropend '>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">wallet</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">Recharge</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">wallet</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link className='text-decoration-none text-dark' to="">Payment History</Link></NavDropdown.Item>

                                </NavDropdown>
                                <NavDropdown title="" className='dropdown dropend '>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                </NavDropdown>
                                {/* <NavDropdown.Item href=""> Another action </NavDropdown.Item>
                                <NavDropdown.Item href="">Something</NavDropdown.Item>
                                <NavDropdown.Item href="">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <button type="button" className="btn btn-light" >Logout</button>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;
