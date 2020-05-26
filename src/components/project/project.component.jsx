import React from 'react';

import "./project.styles.scss"


const P1 = () => (
    <>
    <p className="project-meta">Recreated as a <span className="spanPink">responsive web app</span></p>
    </>
)

const P2 = () => (
    <p className="project-meta">Recreated as a <span className="spanPink">responsive web app</span></p>
)

const P3 = () => (
    <p className="project-meta">Recreated as a <span className="spanPink">responsive web app</span></p>
)


const Project = ({ num, video, bgImg, date, title, meta }) => (
    <article className="project">
            
       
        <a className={bgImg} href="#/">
        {/* <h1>
                PROJECT 1
            </h1> */}
            <div className="project-info">
            
                <h2 className="project-title">{title}</h2>
                {num === 1 ? (<P1/>) : num === 2 ? (<p2/>) : (<p3/>)}
                {/* <div className="hover-hype-text">View Case Study</div> */}
            </div>
{/* 
            <video id="video" autoplay="autoplay" loop="loop">

                <source src={video} type="video/mp4"></source>
            </video>  */}

            <div className={`background ${bgImg}`}></div> 
        </a>
    </article>
)

export default Project;
