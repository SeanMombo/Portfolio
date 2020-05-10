import React from 'react';

import "./project.styles.scss"
import algo from '../../img/algo.mp4'
const Project = ({ bgImg, date, title, meta }) => (
    <article className="project">
         
        <a className={bgImg} href="/basis-design-system/">

            {/* <video preload="preload"  id="video" autoplay="autoplay" loop="loop">

                <source src={algo} type="video/mp4"></source>
            </video> */}

            {/* <div className={`background ${bgImg}`}></div> */}
            <div className="project-info">
                {/* <p className="project-date">{date}</p> */}
                <h2 className="project-title">{title}</h2>
                <p className="project-meta">{meta}</p>
            </div>
        </a>
    </article>
)

export default Project;
