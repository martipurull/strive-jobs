import React, { useEffect } from 'react'
import { ListGroup, Spinner, Alert } from 'react-bootstrap'
import SingleJob from './SingleJob'
import { useSelector, useDispatch } from 'react-redux'
import { setJobsToDisplayAction, setLoadingAction } from '../../redux/actions'

function JobsList({ searchTerm = 'developer', selectedCategory }) {
    const jobs = useSelector(state => state.jobs.jobsToDisplay)
    const errorCode = useSelector(state => state.jobs.errorCode)
    const isLoading = useSelector(state => state.jobs.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setJobsToDisplayAction(selectedCategory, searchTerm))
    }, [searchTerm, selectedCategory])

    return (
        <>
            { isLoading && <Spinner id='home-spinner' animation="grow" variant='secondary' />}
            {errorCode && <Alert variant='danger'>`There was an error when fetching jobs: {errorCode}`</Alert>}
            { !isLoading &&
                <ListGroup className="mt-4">
                    {jobs && jobs.map(job => (
                        <SingleJob key={job._id} job={job} />
                    ))}
                </ListGroup>}
        </>
    )
}

export default JobsList