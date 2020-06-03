import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

// import {
//     Link
//   } from "react-router-dom";
import "./navbar.styles.scss"
import githubLogo from '../../img/GitHub-Mark-Light-32px.png'
import SeanMomboResume from '../../assets/SeanMombourquetteResume.pdf';
const Navbar = () => {
    const [show, setShow] = useState(false);
    return(
    <div className='navbar'>
        
        {/* <Link className="name" to="/">sean mombo</Link>
        <Link to="/">About</Link>
        <Link to="/">portfolio</Link>
        <Link to="/">games</Link>
        <Link to="/">contact</Link>
        <Link to="/">resume</Link> */}
        
        <div className='centerDiv'>
            {/* <a className="navButton name" href="/#">sean mombo</a>  */}
            <a className="navButton" href="/#"><img src={githubLogo} alt="Sean Mombo Github Page"></img></a>
            <a className="navButton" href="/#">games</a>
            <a className="navButton" href="/#">About</a>
            {/* <a className="navButton" href="/#">portfolio</a> */}
            {/* <a className="navButton" href="/#">contact</a> */}
            <a className="navButton" href={SeanMomboResume} target="_blank" rel='noopener noreferrer'>resume</a>
        </div>

        <Modal 
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="project-modal"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
             <embed src={SeanMomboResume} type="application/pdf" width="100%" height="600px" />
            </Modal.Body>
        </Modal>
    </div>
)}

export default Navbar;
