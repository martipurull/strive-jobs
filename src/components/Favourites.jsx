import React, { useState, useEffect } from 'react'
import { ListGroup, Container } from 'react-bootstrap'
import { Star, StarFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavouriteCompaniesAction } from '../redux/actions'

const mapStateToProps = (state) => ({ favouriteCompanies: state.favouriteCompanies })
const mapDispatchToProps = (dispatch) => ({ removeFromFavouriteCompanies: (company) => dispatch(removeFromFavouriteCompaniesAction(company)) })

function Favourites({ favouriteCompanies, removeFromFavouriteCompanies }) {
    return (
        <Container>
            <div>
                <h2 className="pt-5">Your favourite companies</h2>
                <ListGroup className="mt-5">
                    {favouriteCompanies.length > 0 && favouriteCompanies.map((fav, i) => (
                        <ListGroup.Item key={i} className='d-flex'>
                            <Link to={`/${ fav }`}><h3>{fav}</h3></Link>
                            <StarFill className="ms-2 mt-1" size={26} onClick={() => removeFromFavouriteCompanies(fav)} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
