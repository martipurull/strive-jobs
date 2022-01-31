import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { ListGroup, Container } from 'react-bootstrap'
import SingleJob from './home/SingleJob'
import { addToFavouriteCompaniesAction, removeFromFavouriteCompaniesAction } from '../redux/actions'
import { Star, StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'

function Company() {
    const favouriteCompanies = useSelector(state => state.companies.favouriteCompanies)
    const dispatch = useDispatch()
    const { company } = useParams()
    const [jobs, setJobs] = useState([])
    const [isFavourite, setIsFavourite] = useState(favouriteCompanies.includes(company))

    const handleAddFavourite = () => {
        dispatch(addToFavouriteCompaniesAction(company))
        setIsFavourite(true)
    }

    const handleRemoveFavourite = () => {
        dispatch(removeFromFavouriteCompaniesAction(company))
        setIsFavourite(false)
    }

    const getJobs = async () => {
        try {
            const response = await axios.get(`https://strive-jobs-api.herokuapp.com/jobs?company=${ company }`)
            setJobs(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJobs()
    }, [company])

    return (
        <Container>
            <div>
                <h2 className="pt-5">Jobs available at <span className="company-title" >{company}</span>{isFavourite
                    ? <StarFill className="ms-2 mb-2" onClick={() => handleRemoveFavourite()} />
                    : <Star className='ms-2 mb-2' onClick={() => handleAddFavourite()} />}</h2>
                <ListGroup className="mt-5">
                    {jobs && jobs.map(job => (
                        <SingleJob key={job._id} job={job} />
                    ))}
                </ListGroup>
            </div>
        </Container>
    )
}

export default Company