import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light"  expand="lg">
                <Container>
                    <Navbar.Brand href="/">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Vendar</Nav.Link> */}
                            {/* <Nav.Link href="#link">Link</Nav.Link> */}
                            <NavDropdown title="Vendar" id="basic-nav-dropdown">
                                <NavDropdown title="create new user" className='dropdown dropend text-md'>
                                    <NavDropdown.Item href=""> <NavLink to="/vender/newuser/user">Action</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item href="/vender/newuser/usergram2">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Car" className='dropdown dropend '>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="wallet" className='dropdown dropend '>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
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
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;
