import React from 'react';

import "./portfolio-page.styles.scss"
import CustomButton from '../custom-button/custom-button.component'
import overlayImg from '../../img/col1.png'
import Project from '../project/project.component'

import algo from '../../img/algo.mp4'
import lol from '../../img/lolsetrecording.mp4'

class PortfolioPage extends React.Component {

    
    render () {
        
        return (
            <div className="portfolio-page">


                {/* <div className="portfolio-left">
                    
                    <div className="project-container">
                        <h1>Portfolio</h1>
                        <Project bgImg={'bg1'} date="November 2019" title="LoL Set Builder" meta="Recreated as a <span>responsive web app</span>"/>

                        <Project bgImg={'bg2'}date="December 2019" title="Algo-Visual" meta="Engineered an interactive algorithm visualizer"/>

                        <Project bgImg={'bg3'}/>
                    </div>
                </div> */}
                {/* const meta1 = (Recreated as a <span>responsive web app</span>); */}
                <div className="portfolio-right">
                    <h1>Selected Works</h1>
                    <div className="project-container">
                        
                        <Project num={1} bgImg={'bg1'} video={algo} date="November 2019" title="LoL Set Builder" meta=""/>

                        <Project num={2} bgImg={'bg2'} video={lol} date="December 2019" title="Algo-Visual" meta="Engineered an interactive algorithm visualizer"/>

                        <Project num={3} bgImg={'bg3'} video={lol} /> 
                        
                    </div>
                </div>


            </div>
        )
    }
}

export default PortfolioPage;
