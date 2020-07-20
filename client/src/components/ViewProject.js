import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router"
import axios from 'axios'
import {
    Row, Col, 
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap'


const ViewProject = ( props ) => {
    const [ project, setProject ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get( `http://localhost:5000/api/projects/${id}` )
        .then( res => {
          setProject( res.data )
          console.log('Axios Res 2: ', res.data)
          return
        })
        .catch(err => { console.log( 'Axios Error: ', err )})
    }, [])

    const handleDelete = ( e ) => {
        axios.delete(`http://localhost:5000/api/projects/${id}`)
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
                <div>
                    <Card>
                        <CardImg top width="310" src="https://cellardoorgames.com/wp-content/uploads/2018/01/ahhhh-310x180.png" alt="project image" />
                        <CardBody>
                            <CardTitle><h4>{project.name}</h4></CardTitle>
                            <CardText>{project.description}</CardText>
                            <Button>Edit</Button> <Button onClick={handleDelete}>Delete</Button> <Link to="/"><Button>Exit</Button></Link>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        </Row>
        
    )
}

export default ViewProject