import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

import "./project.styles.scss"
// import mockupShadow from '../../img2/MobileMockupShadow.png'
import lolVideo from '../../img/lolsetrecording.mp4';

const P1 = () => (
    <>
    <p className="project-meta">Recreated as a <span className="spanPink">responsive web app</span></p>
    </>
)

const P2 = () => (
    <p className="project-meta"><span className="spanPink">Designed and developed</span> an interactive algorithm visualizer</p>
)

const P3 = () => (
    <p className="project-meta">Expanded skillset into fullstack by creating an <span className="spanPink">ecommerce app</span></p>
)

const ModalP1 = ({ title }) => (
    <div className="modal-content-body">

        <video id="video" loop="loop" controls>
            <source src={lolVideo} type="video/mp4"></source>
        </video> 
        
        <div className="buttonRow"> 
            <Button variant="primary">
                Visit Project
            </Button>
            <Button variant="danger">
                Source Code
            </Button>
        </div>

            <p>
                
            </p>
    </div>
);

const ModalP2 = () => (
    <p>
        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
        ipsam atque a dolores quisquam quisquam adipisci possimus
        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
        deleniti rem!
    </p>
);

const ModalP3 = () => (
    <p>
        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
        ipsam atque a dolores quisquam quisquam adipisci possimus
        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
        deleniti rem!
    </p>
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
