import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SingleJob({ job }) {

    return (
        <ListGroup.Item>
            <span className="job-title">{job.title}</span> at <Link to={`/${ job.company_name }`} ><span className="company-name">{job.company_name}</span></Link>
        </ListGroup.Item>
    )
}
