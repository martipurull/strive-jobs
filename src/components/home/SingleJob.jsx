import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function SingleJob({ job }) {

    return (
        <ListGroup.Item>
            <span className="job-title">{job.title}</span> at <span className="company-name"> {job.company_name}</span>
        </ListGroup.Item>
    )
}
