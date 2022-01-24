import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { ListGroup, Container } from 'react-bootstrap'
import SingleJob from './home/SingleJob'

export default function Company() {
    const { company } = useParams()
    const [jobs, setJobs] = useState([])

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
                <h2 className="pt-5">Jobs available at <span className="company-title" >{company}</span></h2>
                <ListGroup className="mt-5">
                    {jobs && jobs.map(job => (
                        <SingleJob key={job._id} job={job} />
                    ))}
                </ListGroup>
            </div>
        </Container>
    )
}
