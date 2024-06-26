import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
    
    <Navbar className="bg-dark sticky">
        <Container>
          <Navbar.Brand href="#home">
          <FontAwesomeIcon className='text-light' icon={faPlay} beat />
          <span className='ms-3 fs-5 text-light '>Media Player</span>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      </>
  )
}

export default Header