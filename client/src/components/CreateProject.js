import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router"
import axios from 'axios'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


const CreateProject = ( props ) => {
    const handleSubmit = ( e ) => {
        e.preventDefault()

        axios.create(`http://localhost:5000/api/projects/`)
        .then(res => {
            if(res.status === 204) {
                window.location = "/"
            }
        })
        .catch(err => { console.log( 'Axios Error: ', err )})
    }

    return (
        <Row>
            <Col sm="6">
                <Form action={handleSubmit}>
                    <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type="text" name="Name" id="Name" placeholder="Project Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" placeholder="Project Description" />
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" name="completed" id="completed" />
                        <Label for="completed">Completed</Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default CreateProject