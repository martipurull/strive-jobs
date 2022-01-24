import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ListGroup } from 'react-bootstrap'
import SingleJob from './SingleJob'

export default function JobsList({ searchTerm }) {
    const [jobs, setJobs] = useState([])

    const getJobs = async () => {
        try {
            const response = await axios.get(`https://strive-jobs-api.herokuapp.com/jobs?search=${ searchTerm }&limit=10`)
            setJobs(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJobs()
    }, [searchTerm])

    return (
        <ListGroup className="mt-4">
            {jobs && jobs.map(job => (
                <SingleJob key={job._id} job={job} />
            ))}
        </ListGroup>
    )
}
