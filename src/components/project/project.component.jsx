import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
// import VideoThumbnail from 'react-video-thumbnail';

import "./project.styles.scss"
// import mockupShadow from '../../img2/MobileMockupShadow.png'
import lolVideo from '../../img/lolsetrecording.mp4';
import algoVideo from '../../img/AlgoDemo2.mp4';
import crwnVideo from '../../img/CrwnDemo.mp4';
import crownThumb from '../../img/5.png';


const P1 = () => (
    <>
    <p className="project-meta">Recreated as a <span className="spanPink">responsive web app</span></p>
    </>
)

const P2 = () => (
    <p className="project-meta"><span className="spanPink">Designed and developed</span> an interactive algorithm visualizer</p>
)

const P3 = () => (
    <p className="project-meta"> Built an <span className="spanPink">ecommerce app</span> as a Udemy course project. Expanded skillset into fullstack</p>
)

const vidStyle = {
    width: '100%',
    height: '80%',
    margin: '0 auto'
}
const ModalP1 = ({ title }) => (
    <div className="modal-content-body">

        <video id="video" loop="loop" controls preload="metadata">
            <source src={lolVideo + '#t=0.5'} type="video/mp4"></source>
        </video> 
        
        <div className="buttonRow"> 
            <Button variant="primary">
                Visit Project
            </Button>
            <Button variant="danger">
                Source Code
            </Button>
        </div>
        <hr></hr>

        <h1>Context:</h1>
        <p>     
            League of Legends is one of the most popular games in the world.
            Third party item-set builder web apps existed — but did not work on mobile. 
            <br/><br/>The goal of this project was to fill this gap in mobile functionality. 
        </p>
        <h1>Process:</h1>
        <p>  
        Implemented MVC pattern to manage information flow. Connected to the DataDragon API to pull item meta-data and images.
        Integrated SortableJS library for core drag & drop functionality. Used jQuery for the remaining DOM-manipulation and interactivity.
        </p>
        <h1>Technologies:</h1>
        <p>     
            MVC design pattern, HTML5, CSS, JavaScript, jQuery, async/await, SortableJS
        </p>
    </div>
);

const ModalP2 = () => (
    <div className="modal-content-body">

    <video id="video" loop="loop" controls preload="metadata">
        <source src={algoVideo + '#t=0.5'} type="video/mp4"></source>
    </video> 
    
    <div className="buttonRow"> 
        <Button variant="primary">
            Visit Project
        </Button>
        <Button variant="danger">
            Source Code
        </Button>
    </div>
    <hr></hr>

    <h1>Description:</h1>
    <p>     
        Algo-Visual is an visual interactive playground for exploring two grid based algorithms:
        
        Flood-fill, and Cellular Automata Cave Generation
    </p>
    <h1>Process:</h1>
        <p>  
        Designed and developed Algo-Visual as a responsive web app in React. 
        Coded cellular automata cave generation, and floodfill algorithms in JavaScript. 
        Saved time on styling by taking advantage of React Bootstrap components. 
        State management was messy but functional — can be improved by refactoring with Redux or Hooks to reduce complexity and code scattering.
        </p>
    <h1>Technologies:</h1>
    <p>     
        React, JavaScript, HTML5, SCSS
    </p>

</div>
);

const ModalP3 = () => (
    <div className="modal-content-body">

    <video id="video" loop="loop" controls preload="metadata">
        <source src={crwnVideo + '#t=0.5'} type="video/mp4"></source>

    </video> 
    {/* <ReactPlayer  className="videoPlayer" url={crwnVideo} light={crownThumb} playing controls loop /> */}
    {/* style={vidStyle} */}
    <div className="buttonRow"> 
        <Button variant="primary">
            Demo
        </Button>
        <Button variant="danger">
            gitHub
        </Button>
    </div>
    <hr></hr>

    <h1>Description:</h1>
    <p>     
        Built a fullstack ecommerce app using React. 
        Wrote clean, modular, and reusable code. 
    </p>
    <h1>Process:</h1>
        <p>  
            Coded alongside Udemy course: <a href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/">Complete React Developer - Zero To Mastery</a>
            <br/>

            Implemented secure payment processing, user auth/OAuth, and NoSQL database, through Stripe and Firebase API. 
            Studied and implemented several common state management patterns — Redux, Sagas, Hooks, Context-API, Apollo, and GraphQl.
        </p>
    <h1>Technologies:</h1>
    <p>     
        React, Redux, Sagas, Firebase/FireStore, Stripe, Heroku, Node.js, Express, GraphQL
    </p>

</div>
);

const Project = ({ num, video, bgImg, date, title, meta }) => {
    const [show, setShow] = useState(false);

    return (
        <>
    
            <article 
                className="project" 
                onClick={() => setShow(true)}
                >
                    
                <a className={bgImg} href="#/">
        
                    <div className="project-info-container">
                        <div className="project-info">
                        
                            <h2 className="project-title">{title}</h2>
                            {num === 1 ? (<P1/>) : num === 2 ? (<P2/>) : (<P3/>)}
                            
                        </div>
                        {/* <div className="hover-hype-text">View Case Study</div> */}
                    </div>
                    {/* <video id="video" autoplay="autoplay" loop="loop">

                        <source src={video} type="video/mp4"></source>
                    </video>  */}
                    
                    <div className={`background ${bgImg}`}>
                        {/* <img src={mockupShadow} alt='mockupshadow'/> */}
                    </div> 
                    
                </a>
            </article>

        <Modal 
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="project-modal"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            {title}
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                {num === 1 ? (<ModalP1/>) : num === 2 ? (<ModalP2/>) : (<ModalP3/>)}
            </Modal.Body>
        </Modal>
    </> //div className="project-container"
)}

export default Project;
