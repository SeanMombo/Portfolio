import React from 'react';

import "./portfolio-page.styles.scss"
// import CustomButton from '../custom-button/custom-button.component'
// import overlayImg from '../../img/col1.png'
import Project from '../project/project.component'

// import algo from '../../img/algo.mp4'
// import lol from '../../img/lolsetrecording.mp4'
// import githubLogo from '../../img/GitHub-Mark-Light-64px.png'
class PortfolioPage extends React.Component {

    componentDidMount() {
        // Get the input field
        Array.from(document.getElementsByClassName("project")).forEach( input => {
            // Execute a function when the user releases a key on the keyboard
            input.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                input.click();
            }
            });
        })

    }
    
    render () {
        
        return (
            <div className="portfolio-page">
                    <div className="contact-info">
                        {/* <a href="http://github.com/SeanMombo"><img src={githubLogo} alt="Sean Mombo Github Page"></img></a> */}
                        {/* <p>sean@mombourquette.com</p>  */}
                       
                    </div>
            
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
                    
                {/* <hr/> */}
                    {/* <h1>Selected Works</h1> */}
                    <div className="project-container">
                        
                        <Project num={1} bgImg={'bg1'} date="November 2019" title="LoL Set Builder" meta=""/>

                        <Project num={2} bgImg={'bg2'} date="December 2019" title="Algo-Visual" meta="Engineered an interactive algorithm visualizer"/>

                        <Project num={3} bgImg={'bg3'} title="CRWN CLOTHING" meta=""/> 
                        
                    </div>
                </div>


            </div>
        )
    }
}

export default PortfolioPage;
