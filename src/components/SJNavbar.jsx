import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SJNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className="logo" to='/' >SJ</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <div className="nav-link">
                        <Link className='navbar-links' to='/'>Home</Link>
                    </div>
                    <div className="nav-link">
                        <Link className='navbar-links' to='/companies'>Companies</Link>
                    </div>
                    <div className="nav-link">
                        <Link className='navbar-links' to='categories'>Categories</Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}
