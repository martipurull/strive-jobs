import React, { useState } from 'react'
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap'
import JobsList from './home/JobsList'

export default function Home() {

    const [searchTerm, setSearchTerm] = useState()

    return (
        <Container>
            <Row className="mt-4">
                <Col></Col>
                <Col xs={6}>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="find your job"
                            className="me-2"
                            aria-label="Search"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={8}><JobsList searchTerm={searchTerm} /></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
