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
                    <Nav.Link>
                        <Link className='navbar-links' to='/'>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='navbar-links' to='/companies'>Companies</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className='navbar-links' to='categories'>Categories</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
