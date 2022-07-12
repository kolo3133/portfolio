import {Container} from 'react-bootstrap';
import { BreakLine } from '../components/stylized-components';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <Container>
        <h1 className='text-center text-white mt-5'>CONTACT ME</h1>
        <BreakLine />
        <div className="d-flex flex-column text-white text-center mt-5">
            <span><BsLinkedin className='fs-1 mb-3' /></span> 
            <h2 className='mb-5'>www.linkedin.com/in/jakkol3133/</h2>
            <span><AiOutlineMail className='fs-1 mb-3' /></span> 
            <h2 className='mb-5'>jakubkolodziejski3105@gmail.com</h2>
        </div>
    </Container>
  )
}

export default Contact