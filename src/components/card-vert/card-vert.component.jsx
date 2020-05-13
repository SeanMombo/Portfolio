import React from 'react';

import "./card-vert.styles.scss"
import mockup1 from '../../img2/LeaguePcMobile2.png';
const CardVert = () => (
    <div className='card-vert'>
        <div className="card-img">
            <img src={mockup1} alt="project thumbnail: league of legends item set builder"/>
        </div>
    </div>
)

export default CardVert;
