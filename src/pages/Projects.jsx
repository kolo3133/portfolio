import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';
import { projectsList } from '../utils/projects-list';
import { ProjectsDiv, SCard, HrefLink } from '../components/stylized-components';

const Projects = () => {

    
  return (
    <>
    <h1 className='text-center text-white mt-5 mb-5'>MY PROJECTS:</h1>
    <br></br>
    <ProjectsDiv className='mt-5'>
        
        {projectsList.map((project) => {
            return (
                
                <Container className='d-flex flex-column flex-lg-row justify-content-center align-items-center mb-5'>
                <SCard key={project.id} className='rounded ' style={{ width: '20rem', height: '22rem' }}>
                    <Card.Img variant='top' src={project.img} className='mb-4 ' style={{borderBottom: '1px solid black'}} />
                    <Card.Title className='text-center'>{project.title}</Card.Title>
                    <Card.Body>{project.desc}</Card.Body>
                    <div className='d-flex flex-row justify-content-around mb-3'>
                        <HrefLink href={project.demoUrl}><Button variant='outline-dark'>Demo</Button></HrefLink>
                        <HrefLink href={project.codeUrl}><Button variant='outline-dark'>Code</Button></HrefLink>
                    </div>
                </SCard>
                </Container>
            );
        })}
    </ProjectsDiv>
    </>
    
    
  )
}


export default Projects