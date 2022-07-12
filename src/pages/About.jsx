import {Container} from 'react-bootstrap';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3, DiJavascript1} from 'react-icons/di';
import {FaReact, FaBootstrap} from 'react-icons/fa';
import { BreakLine } from '../components/stylized-components';

const About = () => {
  return (
    <Container>

        <h1 className='text-white text-uppercase text-center mt-5'>my name is Jakub Kołodziejski</h1>
        <BreakLine />
        <p className="text-center text-white mt-3">I live in Poland and I'm 21 years old.</p>
        <p className="text-center text-white mt-3">For 3 years I have been learning how to create websites and build web applications,</p>
        <p className="text-center text-white mt-3">and for over a year I have been creating projects.</p>
        <p className="text-center text-white mt-3">This year I am starting my IT studies with a specialization in programming.</p>
        <p className="text-center text-white mt-3">In my projects, I focus on simplicity and clarity while maintaining responsive web design in the first place.</p>
        <p className="text-center text-white mt-3">I learn quickly and accurately with each project.</p>



        <h1 className='text-white text-center mt-5'>TECHNOLOGIES I WORK WITH</h1>
        <BreakLine />
        <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mt-4 text-white">
        <AiFillHtml5 className='fs-1 mb-3 mb-lg-5'/>
        <DiCss3 className='fs-1 mb-3 mb-lg-5'/> 
        <DiJavascript1 className='fs-1 mb-3 mb-lg-5'/>
        <FaReact className='fs-1 mb-3 mb-lg-5'/>
        <FaBootstrap className='fs-1 mb-3 mb-lg-5'/>
        </div>
    </Container>
  )
}

export default About