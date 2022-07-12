import {Container, Button} from 'react-bootstrap';
import { HrefLink } from '../components/stylized-components';

const Home = () => {
  return (
    <Container className='d-flex flex-column justify-content-start align-items-start mt-3 text-white'>
        <div className="title mt-5 mb-3">
            <h1>Hi, I'm Jakub</h1>
        </div>
        <div className="sub-title">
            <h2>Welcome to my portfolio page</h2>
        </div>
        <div className="info mt-5 mb-5 w-50">
            <p>I am very glad that you are reviewing my resume. All information can be found in the tabs in the navigation.
            This page was created in React.JS using bootstrap, styled-components etc. so you can view the source code of this page by clicking the button below.
            </p>
        </div>
        <HrefLink href=''><Button variant='outline-light mb-5 mb-lg-0'>View Code</Button></HrefLink>
    </Container>
  )
}

export default Home