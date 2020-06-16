import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

// import {
//     Link
//   } from "react-router-dom";
import "./navbar.styles.scss"
import githubLogo from '../../img/small-github.png'
import SeanMomboResume from '../../assets/SeanMombourquetteResume.pdf';

import dieBanner from '../../img/DieAloneHero.jpg';
import tankBanner from '../../img/tinytanks.jpg';
import caveBanner from '../../img/cavewithrobots.png'

const GamesModal = () => (
    <div className="gameContainer">
        <a className="gameBanner" href="https://armorgames.com/die-alone-game/17875" target="_blank" rel='noopener noreferrer'> <img src={dieBanner} alt="Die alone, game thumbnail"/></a>
        <a className="gameBanner" href="https://www.miniclip.com/games/cave-with-robots/en/" target="_blank" rel='noopener noreferrer'> <img src={caveBanner} alt="Cave With Robots, game thumbnail"/></a>
        <a className="gameBanner" href="https://www.addictinggames.com/shooting/tiny-tanks" target="_blank" rel='noopener noreferrer'> <img src={tankBanner} alt="Tiny Tanks, game thumbnail"/></a>
    </div>
);

const AboutModal = () => (
    <div className="gameContainer">
        I'm Sean! I graduated with a Bachelors in Computing last april from Queen's University.

        
    </div>
);

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

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
            <a className="navButton" href="https://github.com/SeanMombo" target="_blank" rel='noopener noreferrer'><img src={githubLogo} alt="Sean Mombo Github Page"></img></a>
            <button className="navButton" onClick={setShow}> games</button>
            <button className="navButton" onClick={setShow2} >About</button>
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
                Indie Games I've Made
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <GamesModal/>
            </Modal.Body>
        </Modal>

        <Modal 
            show={show2}
            onHide={() => setShow2(false)}
            dialogClassName="project-modal"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                About Me
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <AboutModal/>
            </Modal.Body>
        </Modal>
    </div>
)}



export default Navbar;
