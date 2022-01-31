import React, { useState } from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserAction } from '../redux/actions'
import { Button } from 'react-bootstrap'

function SJNavbar() {
    const user = useSelector(state => state.users.user)
    const dispatch = useDispatch()
    const [username, setUsername] = useState(user)

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
                        <Link className='navbar-links' to='/favourites'>Favourites</Link>
                    </div>
                </Nav>
                <div className='d-flex'>
                    {!user
                        ? <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={e => setUsername(e.target.value)}
                            onKeyUp={e => {
                                e.key === 'Enter' && dispatch(setUserAction(username))
                            }} />
                        : <Link to='/'><Button
                            variant='danger'
                            onClick={e => dispatch(setUserAction(''))}
                        >logout</Button></Link>

                    }
                </div>
            </Container>
        </Navbar>
    )
}

export default SJNavbar