import React from 'react';

import "./project.styles.scss"
// import mockupShadow from '../../img2/MobileMockupShadow.png'

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


const Project = ({ num, video, bgImg, date, title, meta }) => (
    <article className="project">
            
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
)

export default Project;
