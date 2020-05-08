import React from 'react';

import "./portfolio-page.styles.scss"
import CustomButton from '../custom-button/custom-button.component'
import overlayImg from '../../img/col1.png'

class PortfolioPage extends React.Component {

    render () {
        return (
            <div className="portfolio-page">
                <article>
                    <a class="project"  href="/basis-design-system/">
                    <div class="project-info">
                        <p class="project-date">December 2019</p>
                        <h2 class="project-title">League of Legends Set Builder</h2>
                        {/* <p>Developed a 3rd Party Item Set Builder for League of Legends</p> */}
                        {/* <div class="post-list__button cent" href="/basis-design-system/">View project</div> */}
                    </div>
                    </a>
                </article>

                <article>
                    <a class="project"  href="/basis-design-system/">
                    <div class="project-info">
                        <p class="project-date">December 2019</p>
                        <h2 class="project-title">League of Legends Set Builder</h2>
                        {/* <p>Developed a 3rd Party Item Set Builder for League of Legends</p> */}
                        {/* <div class="post-list__button cent" href="/basis-design-system/">View project</div> */}
                    </div>
                    </a>
                </article>
                <article>
                    <a class="project"  href="/basis-design-system/">
                    <div class="project-info">
                        <p class="project-date">December 2019</p>
                        <h2 class="project-title">League of Legends Set Builder</h2>
                        {/* <p>Developed a 3rd Party Item Set Builder for League of Legends</p> */}
                        {/* <div class="post-list__button cent" href="/basis-design-system/">View project</div> */}
                    </div>
                    </a>
                </article>

                {/* <img className="circle-overlay" src={overlayImg}/> */}
            </div>
        )
    }
}

export default PortfolioPage;
