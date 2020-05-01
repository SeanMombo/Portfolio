import React from 'react';

import "./gridtile.styles.scss"
import imgContent from '../../lolItemBuildermobile.png';

const Gridtile = () => (
    <div className='gridtile'>
       <div className="tile tile-hover">
         <div className="bg-img img1">
             <img src={imgContent}/>
            <a href="#34340">Google Cloud <br/> Center of Excellence </a>
         </div>
      </div>
    </div>
)

export default Gridtile;
