import React from 'react'
import { Container } from './styles'
import projectData from '../../Data/data'
import Card from '../Card/Card'

const Projects = () => {
  return (
    <Container>
      {projectData.map((project)=>{
        return <Card name={project.name} path={project.path} component={project.component}/>
      })}
    </Container>
  )
}

export default Projects
