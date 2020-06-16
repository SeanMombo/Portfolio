import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

// import {
//     Link
//   } from "react-router-dom";

import "./navbar.styles.scss"
import githubLogo from '../../img/small-github.png'
import SeanMomboResume from '../../assets/SeanMombourquetteResume.pdf';

import GamesModal from '../games-modal/games-modal.component';
import AboutModal from '../games-modal/about-modal.component';


// import dieBanner from '../../img/DieAloneHero.jpg';
// import tankBanner from '../../img/tinytanks.jpg';
// import caveBanner from '../../img/cavewithrobots.png'



// import starkidBanner from '../../img/620x320.png';
// import starkidGif from '../../img/starkidInsta.mp4';
// import starkidGif2 from '../../img/excuseme.mp4';

// const GamesModal = () => (
//     <div className="gameContainer">
//         <a className="gameBanner" href="https://armorgames.com/die-alone-game/17875" target="_blank" rel='noopener noreferrer'> <img src={dieBanner} alt="Die alone, game thumbnail"/></a>
//         <a className="gameBanner" href="https://www.miniclip.com/games/cave-with-robots/en/" target="_blank" rel='noopener noreferrer'> <img src={caveBanner} alt="Cave With Robots, game thumbnail"/></a>
//         <a className="gameBanner" href="https://www.addictinggames.com/shooting/tiny-tanks" target="_blank" rel='noopener noreferrer'> <img src={tankBanner} alt="Tiny Tanks, game thumbnail"/></a>
//     </div>
// );


// const AboutModal = () => (
//     <div className="aboutContainer modal-content-body">
//         <div className="aboutContainerContent">
//             <div className="aboutContainerLeft">
//                 <h1>
//                 Hi, I'm Sean! <br/>
//                 </h1>
//                 <h2>Master of self-directed learning</h2>
//                 {/* <p>I graduated with a Bachelors in Computing last april from Queen's University.</p> */}
//                 {/* <h2>
//                     Passionate about academics, not the academic system. 
//                 </h2> */}
//                 <p>I'm an endlessly curious, and enthusiastic learner, but I felt painfully underchallenged in my early years of school. 
//                 <br/><span>   I felt like a racecar stuck in traffic. </span>
//                 <br/>
//                 <br/>
//                 {/* I spend as much of my time as possible building my own projects; planning, researching, experimenting, practicing, and creating.
//                 Watching lectures and reading blog posts, pausing and rewinding tutorial videos over and over so that I could watch the way someone was juggling, or I could listen to an explanation until I really understood it. */}

//                 When I was 10, I wanted to make my own video games and produce my own music. What could school teach a 10 year old about game development and music production? 
//             <span> <br/> Not much, but the internet could be my teacher.</span>
//                 <br/><br/>
//                 I worked on my own projects. I honed the art of creating curriculum. I learned to view obstacles as opportunities, and failures as feedback. I presented my work and humbled myself before criticism. Over the past decade I've developed many techincal, artistic, and entrepreneurial skills.
//                 <span> <br/>I've learned how to learn.</span>
                
                
//                 {/* I have since created 3 HTML5 games, as a solo developer.  */}
//                 {/* <span> <br/>My games have generated over $8,000 USD, and  1,000,000 plays online</span>
                
//                 <br/><br/>
                
                
//                 {/* <br/><br/>
//                 My games are published on the largest game portals on the internet, I was offensive MVP on my gr 10 football team, I climbed to Champ 2 in Rocket League, and I placed 2nd and 7th in two massive music remix competitions. 
//                 <span> <br/> I don't just learn things. I make them a reality</span> */}
//                 <br/><br/>
//                 I have dedicated thousands of hours towards many different hobbies — programming, game design, piano, music production, origami, magic tricks, freestyle soccer, animation, unicycling, writing, snowboarding, and so so so many more.
                
//             <span> <br/> I like to joke that my only hobby is picking up new hobbies.</span> 
//                 </p>
//             </div>
        
//             {/* <div className="aboutContainerRight">
//                 <video id="video" loop="loop" controls preload="metadata" webkit-playsinline="true" playsinline="true" autoplay="true" muted>
//                     <source src={kickflipVideo + '#t=0.5'} type="video/mp4"></source>
//                 </video> 
//             </div> */}

//             <br/>
//         </div>
         
         
         
   

//         <hr></hr>
//         <br/> 
//         {/* <h1>Real World Results</h1>*/}
//         {/* <h1>I don't just learn — I bring my dreams to life.</h1>  */}
//         <h1>I don't just learn — I create</h1> 
//         <br/>

//         <h2>Web Games</h2>
//         <p>I have created 3 HTML5 games, as a solo developer. My games have <span>generated over $8,000 USD, and  1,000,000 plays online</span></p><br/>

//         <div className="gameContainer2">
//             <a className="gameBanner" href="https://armorgames.com/die-alone-game/17875" target="_blank" rel='noopener noreferrer'> <img src={dieBanner} alt="Die alone, game thumbnail"/></a>
//             <a className="gameBanner" href="https://www.miniclip.com/games/cave-with-robots/en/" target="_blank" rel='noopener noreferrer'> <img src={caveBanner} alt="Cave With Robots, game thumbnail"/></a>
//             <a className="gameBanner" href="https://www.addictinggames.com/shooting/tiny-tanks" target="_blank" rel='noopener noreferrer'> <img src={tankBanner} alt="Tiny Tanks, game thumbnail"/></a>
//         </div>
//         <br/>
//         <br/>
//         <h2>Desktop Game - Starkid's Obstacle Course!!</h2>
//         <p>I developed a fully featured PC game, as a solo developer, and published it on the Steam marketplace</p><br/>
//         <div className="videoContainer">
//             <div className="videoContainer-left">
            
//                 <iframe id="starkidId" title="Buy Starkids Obstacle Course on Steam" src="https://store.steampowered.com/widget/906370/" frameborder="0"  height="190"></iframe>
//                 {/* <video id="video" loop="loop" controls preload="metadata" webkit-playsinline="true" playsinline="true" autoplay="true" muted>
//                     <source src={starkidGif2 + '#t=0.5'} type="video/mp4"></source>
//                 </video>  */}
//             </div>
//             {/* <video id="video" loop="loop" controls preload="metadata" webkit-playsinline="true" playsinline="true" autoplay="true" muted>
//                 <source src={starkidGif + '#t=0.5'} type="video/mp4"></source>
//             </video>  */}
            
//         </div>

//         <br/>
//         <br/>
//         <h2>Visual Art</h2>
//         <p>In 30 days of study, I went from a novice at drawing, to a competent artist. In another 30 days I became a competent painter:  <a href="https://www.instagram.com/mombo_art/"> Instagram Account</a></p> 
        
//         <br/>
        
//         <div className="picContainer">
//             <img className="art-image" src={day1Drawing} alt="Light study from the 1st day of a visual art challenge"/>
//             <img className="art-image" src={clothDrawing} alt="Drawing of a dagger from the 27th day of a visual art challenge"/>
//             <img className="art-image" src={knifeDrawing} alt="Drawing of a dagger from the 27th day of a visual art challenge"/>
//             <img className="art-image" src={handDrawing} alt="Drawing of a hand smoking from the 28th day of a visual art challenge"/>
//         </div>
//         <br/>
//         <br/>
//         <h2>Music Production</h2>
//         <p>I've produced bangers in many genres. I love electronic music, and I'm currently working on my first album!</p> 
//         <br/>
//         <iframe title="Song: Commander Funk - Artist: Party Hat" className="soundcloudPlayer" width="100%" height="166" scrolling="no" frameborder="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/218076949&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
//         <iframe title="Song: Inner Peace - Artist: Party Hat" className="soundcloudPlayer" width="100%" height="166" scrolling="no" frameborder="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180120333&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe> 
//         <iframe title="Song: Televisor - Old Skool (MOMBO Remix) - Artist: Party Hat" className="soundcloudPlayer"  width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100405598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
       
//         {/* <h1>
//             I learn for fun
//         </h1>
//         <p>
        
//         When I was 10, I had a vision for the future. I wanted to make my own video games.
//         To make this vision a reality, there were many challenges I had to overcome. I learned coding, game design, music production, graphic design, and animation. 
//         </p> */}
//     </div>
// );

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return(
    <div className='navbar'>
        
        {/* <Link className="name" to="/">sean mombo</Link>
        <Link to="/">About</Link>
        <Link to="/">portfolio</Link>
        <Link to="/">games</Link>
        <Link to="/">contact</Link>
        <Link to="/">resume</Link> */}
        
        <div className='centerDiv'>
            {/* <a className="navButton name" href="/#">sean mombo</a>  */}
            <a className="navButton" href="https://github.com/SeanMombo" target="_blank" rel='noopener noreferrer'><img src={githubLogo} alt="Sean Mombo Github Page"></img></a>
            <button className="navButton" onClick={setShow}> games</button>
            <button className="navButton" onClick={setShow2} >About</button>
            {/* <a className="navButton" href="/#">portfolio</a> */}
            {/* <a className="navButton" href="/#">contact</a> */}
            <a className="navButton" href={SeanMomboResume} target="_blank" rel='noopener noreferrer'>resume</a>
        </div>

        <Modal 
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="project-modal"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Indie Games I've Made
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <GamesModal/>
            </Modal.Body>
        </Modal>

        <Modal 
            show={show2}
            onHide={() => setShow2(false)}
            dialogClassName="project-modal"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                About Me
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <AboutModal/>
            </Modal.Body>
        </Modal>
    </div>
)}



export default Navbar;
