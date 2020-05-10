import React from 'react';

import "./portfolio-page.styles.scss"
import CustomButton from '../custom-button/custom-button.component'
import overlayImg from '../../img/col1.png'
import Project from '../project/project.component'

class PortfolioPage extends React.Component {

    render () {
        return (
            <div className="portfolio-page">

                <div className="portfolio-left">
                 
                </div>

                <div className="portfolio-right">
                    <div className="project-container">
                        <Project bgImg={'bg1'} date="November 2019" title="LoL Set Builder" meta="Recreated the item set builder from League of Legends as a web app"/>

                        <Project bgImg={'bg2'}date="December 2019" title="Algo-Visual" meta="Created an Interactive App to Visualize FloodFill and Cellular Automata Cave Generation"/>

                        <Project bgImg={'bg3'}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PortfolioPage;
