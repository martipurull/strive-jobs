import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap'
import JobsList from './home/JobsList'
import axios from 'axios'
import { useDebounce } from 'use-debounce'

export default function Home() {

    const [searchTerm, setSearchTerm] = useState()
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')

    const getCategories = async () => {
        try {
            const response = await axios.get('https://strive-jobs-api.herokuapp.com/jobs/categories')
            setCategories(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <Container>
            <Row className="mt-4">
                <Col xs={8}>
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
                <Col>
                    <Form.Select aria-label="Default select example" onChange={e => setSelectedCategory(e.currentTarget.value)}>
                        <option value="">By category</option>
                        {categories && categories.map((c, i) => (
                            <option key={i} value={c} >{c}</option>
                        ))}
                        <option value="">No category</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={8}><JobsList searchTerm={debouncedSearchTerm} selectedCategory={selectedCategory} /></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
