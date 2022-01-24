import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function SJNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SJ</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Companies</Nav.Link>
                    <Nav.Link href="#pricing">Jobs</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
