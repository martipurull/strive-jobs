import React, { useState, useEffect } from 'react'
import { ListGroup, Container } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavouriteCompaniesAction } from '../redux/actions'

function Favourites() {
    const favouriteCompanies = useSelector(state => state.companies.favouriteCompanies)
    const dispatch = useDispatch()

    return (
        <Container>
            <div>
                <h2 className="pt-5">Your favourite companies</h2>
                <ListGroup className="mt-5">
                    {favouriteCompanies.length > 0 && favouriteCompanies.map((fav, i) => (
                        <ListGroup.Item key={i} className='d-flex'>
                            <Link to={`/${ fav }`}><h3>{fav}</h3></Link>
                            <StarFill className="ms-2 mt-1" size={26} onClick={() => dispatch(removeFromFavouriteCompaniesAction(fav))} />
                        </ListGroup.Item>
                    ))}
                    {favouriteCompanies.length === 0 && <h4>You haven't chosen any favourite companies yet.</h4>}
                </ListGroup>
            </div>
        </Container>
    )
}

export default Favourites
