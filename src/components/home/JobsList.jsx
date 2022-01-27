import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleJob from './SingleJob'
import { connect } from 'react-redux'
import { setJobsToDisplayAction } from '../../redux/actions'

const mapStateToProps = state => ({
    jobs: state.jobs.jobsToDisplay,
    errorCode: state.jobs.errorCode,
    isLoading: state.jobs.isLoading
})

const mapDispatchToProps = dispatch => ({
    getJobs: (selectedCategory, searchTerm) => { dispatch(setJobsToDisplayAction(selectedCategory, searchTerm)) }
})

function JobsList({ searchTerm = 'developer', selectedCategory, jobs, errorCode, isLoading, getJobs }) {

    useEffect(() => {
        getJobs(selectedCategory, searchTerm)
    }, [searchTerm, selectedCategory])

    return (
        <ListGroup className="mt-4">
            {jobs && jobs.map(job => (
                <SingleJob key={job._id} job={job} />
            ))}
        </ListGroup>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)