import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleJob from './SingleJob'
import { useSelector, useDispatch } from 'react-redux'
import { setJobsToDisplayAction } from '../../redux/actions'

function JobsList({ searchTerm = 'developer', selectedCategory }) {
    const jobs = useSelector(state => state.jobs.jobsToDisplay)
    const errorCode = useSelector(state => state.jobs.errorCode)
    const isLoading = useSelector(state => state.jobs.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setJobsToDisplayAction(selectedCategory, searchTerm))
    }, [searchTerm, selectedCategory])

    return (
        <ListGroup className="mt-4">
            {jobs && jobs.map(job => (
                <SingleJob key={job._id} job={job} />
            ))}
        </ListGroup>
    )
}

export default JobsList