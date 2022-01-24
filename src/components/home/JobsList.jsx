import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ListGroup } from 'react-bootstrap'
import SingleJob from './SingleJob'

export default function JobsList({ searchTerm = 'developer', selectedCategory }) {
    const [jobs, setJobs] = useState([])
    const category = selectedCategory


    const getJobs = async () => {
        try {
            if (category) {
                const response = await axios.get(`https://strive-jobs-api.herokuapp.com/jobs?category=${ category }&limit=10`)
                setJobs(response.data.data)
            } else {
                const response = await axios.get(`https://strive-jobs-api.herokuapp.com/jobs?search=${ searchTerm }&limit=10`)
                setJobs(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJobs()
    }, [searchTerm, selectedCategory])

    return (
        <ListGroup className="mt-4">
            {jobs && jobs.map(job => (
                <SingleJob key={job._id} job={job} />
            ))}
        </ListGroup>
    )
}
