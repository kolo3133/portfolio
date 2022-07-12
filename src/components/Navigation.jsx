import React from 'react'
import {Container, Button, Offcanvas} from 'react-bootstrap';
import { SLink } from './stylized-components';
import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';


const Navigation = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Container className='d-flex flex-row justify-content-between'>
        <div>
            <h1 className='text-white menu-logo'>Portfolio</h1>
        </div>
        <ul className='d-none d-lg-flex flex-row justify-content-end  align-items-center text-white menu-nav-items'>
            <SLink to={'/'}>Home</SLink>
            <SLink to={'/Projects/'}>Projects</SLink>
            <SLink to={'/About/'}>About Me</SLink>
            <SLink to={'/Contact/'}>Contact</SLink>
        </ul>
        <span onClick={handleShow} className='d-flex d-lg-none justify-content-center align-items-center fs-2 text-white mt-3'>
        <GiHamburgerMenu />
        </span>
    </Container>

    <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>NAVIGATION</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='dflex flex-column justify-content-center  align-items-center text-dark menu-nav-items'>
            <li onClick={handleClose}><SLink to={'/'} className='text-dark'>Home</SLink></li>
            <li onClick={handleClose}><SLink to={'/Projects/'} className='text-dark'>Projects</SLink></li>
            <li onClick={handleClose}><SLink to={'/About/'} className='text-dark'>About Me</SLink></li>
            <li onClick={handleClose}><SLink to={'/Contact/'} className='text-dark'>Contact</SLink></li>
        </ul>
        </Offcanvas.Body>
    </Offcanvas>

    </>
  )
}


export default Navigation