import React from 'react'
import { Container, Name } from './styles'
import { Link } from 'react-router-dom'

const Card = ({ name, path, component: Component }) => {
  return (
    <Container>
        <Link to={path}>
            <Name>{name}</Name>
        </Link>
    </Container>
  )
}

export default Card
