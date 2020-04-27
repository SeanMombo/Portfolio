import React from 'react';

import "./card.styles.scss"
import imgContent from '../../lolItemBuildermobile.png';

const Card = () => (
    
    <div className='card'>
        <div class="iphone-top">
            <span class="camera"></span>
            <span class="sensor"></span>
            <span class="speaker"></span>
        </div>
        <div class="top-bar"></div>
        <div class="iphone-screen">
            <img src={imgContent}/>
            {/* <iframe src="http://seanmombo.com/lolsetbuilder/"></iframe> */}
        </div>
        <div class="buttons">
            <span class="on-off"></span>
            <span class="sleep"></span>
            <span class="up"></span>
            <span class="down"></span>
        </div>
            <div class="bottom-bar"></div>
            <div class="iphone-bottom">
            <span></span>
        </div>
  </div>
)

export default Card;
