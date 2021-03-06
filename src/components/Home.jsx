import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap'
import JobsList from './home/JobsList'
import axios from 'axios'
import { useDebounce } from 'use-debounce'
import { useSelector } from 'react-redux'

function Home() {

    const user = useSelector(state => state.users.user)
    const [searchTerm, setSearchTerm] = useState()
    const [debouncedSearchTerm] = useDebounce(searchTerm, 200)
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
                    {user &&
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="find your job"
                                className="me-2"
                                aria-label="Search"
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </Form>
                    }
                </Col>
                <Col>
                    {user &&
                        <Form.Select aria-label="Default select example" onChange={e => setSelectedCategory(e.currentTarget.value)}>
                            <option value="">By category</option>
                            {categories && categories.map((c, i) => (
                                <option key={i} value={c} >{c}</option>
                            ))}
                            <option value="">No category</option>
                        </Form.Select>
                    }
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    {user && <JobsList searchTerm={debouncedSearchTerm} selectedCategory={selectedCategory} />}
                    {!user && <h4 className='mt-5'>Please enter a username to start searching for jobs.</h4>}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Home