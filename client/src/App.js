import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import { Table, Button } from 'reactstrap'
import './App.css'

import ViewProject from './components/ViewProject'
import CreateProject from './components/CreateProject'


const App = ( props ) => {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    axios.get( 'http://localhost:5000/api/projects' )
    .then( res => {
      setProjects( res.data )
      console.log('Axios Res: ', res.data)
    })
    .catch(err => { console.log( 'Axios Error: ', err )})
  }, [])

  return (
    <div className="App wrapper">
      <h2 className="title">Projects</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Completed</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map(project => {
              return (
                <tr>
                  <th scope="row">{project.id}</th>
                  <td>{project.name}</td>
                  <td>{project.completed}</td>
                  <td className="icon-wrapper"><Link to={`/project/${project.id}`}><i className="far fa-eye fa-2x blue"></i></Link></td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
      <hr />
      <Link to="/"><Button>Home</Button></Link> <Link to="/create"><Button>Add Project</Button></Link>
      <hr />
      <Route exact path="/" />
      <Route exact path="/project/:id" component={ViewProject} />
      <Route exact path="/create" component={CreateProject} />
    </div>
  )
}

export default App