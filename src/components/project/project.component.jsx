import React from 'react';

import "./project.styles.scss"

const Project = ({ bgImg, date, title, meta }) => (
    <article className="project">
        <a className={bgImg} href="/basis-design-system/">
        <div className="project-info">
            <p className="project-date">{date}</p>
            <h2 className="project-title">{title}</h2>
            <p className="project-meta">{meta}</p>
        </div>
        </a>
    </article>
)

export default Project;
