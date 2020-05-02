import React from 'react';

import "./main-banner.styles.scss"
import CustomButton from '../custom-button/custom-button.component'

class MainHeader extends React.Component {

    
    


    render () {
        return (

            <div className='main-banner'>

            <div className="social-container">
                    
                    {/* <svg viewBox="0 0 128 128">
                            <path fill-rule="evenodd" fill="#020d16" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">

                            </path>
                        </svg> */}
                {/* <a className="button small" href="#contact-form">GitHub</a> */}

                    <CustomButton href="#contact-form" text='portfolio'/>
                    <CustomButton href="#contact-form" text='GAMES'/>
                    <CustomButton href="#contact-form" text='About'/>
                    <CustomButton href="#contact-form" text='Contact'/>
                {/* <a className="button" href="#contact-form">portfolio</a>
                    <a className="button" href="#contact-form">GAMES</a>
                    <a className="button" href="#contact-form">About</a>
                    <a className="button" href="#contact-form">Contact</a> */}
                    
                    
                </div>
                <header>
                    
                    

                    <div class="logo-container">  
                  
                        <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="408.79120879120876" viewBox="-300, -300, 1000, 1009">

                            <g id="svgg"><path id="path0" d="M134.525 5.347 C 121.526 10.065,89.292 60.337,63.575 116.001 C 53.166 138.532,53.235 136.518,62.518 146.666 C 66.684 151.220,72.865 158.110,76.255 161.979 L 82.418 169.012 98.901 165.993 C 107.967 164.333,118.846 162.369,123.077 161.628 C 127.308 160.888,132.253 159.848,134.066 159.317 C 148.764 155.017,228.571 147.847,228.571 150.827 C 228.571 159.438,177.127 227.774,134.717 275.498 L 110.989 302.198 124.318 315.934 C 138.020 330.055,142.504 332.096,147.253 326.374 C 148.758 324.560,151.346 323.077,153.005 323.077 C 158.805 323.077,191.073 287.917,225.399 244.194 C 236.210 230.424,246.654 217.127,248.609 214.645 C 252.099 210.213,252.374 210.201,263.993 213.966 C 281.747 219.720,323.875 226.232,345.604 226.583 C 356.181 226.753,364.818 227.518,364.796 228.282 C 364.640 233.853,315.062 295.396,267.724 348.783 C 240.020 380.026,241.960 375.318,252.198 386.466 C 256.731 391.402,262.677 398.119,265.411 401.394 L 270.382 407.347 279.696 402.661 C 288.753 398.105,306.802 379.775,333.174 348.352 C 340.275 339.890,346.762 332.664,347.589 332.294 C 352.209 330.226,377.543 293.866,386.897 275.878 C 400.380 249.948,401.118 240.924,391.004 225.654 C 381.936 211.964,384.750 212.754,342.090 211.926 C 321.358 211.523,300.934 210.707,296.703 210.112 C 292.473 209.518,282.088 208.008,273.626 206.757 C 265.165 205.506,257.452 204.463,256.488 204.439 C 255.523 204.415,257.779 199.969,261.502 194.559 C 285.948 159.027,291.018 137.484,277.845 125.109 C 274.920 122.361,272.527 118.802,272.527 117.199 C 272.527 115.597,271.079 114.286,269.308 114.286 C 267.537 114.286,264.977 112.209,263.619 109.671 C 260.156 103.200,179.078 107.222,130.771 116.262 C 116.922 118.854,117.172 119.576,126.318 103.396 C 130.579 95.856,134.066 89.393,134.066 89.033 C 134.066 88.673,140.989 76.725,149.451 62.482 C 157.912 48.239,164.835 34.786,164.835 32.585 C 164.835 29.021,150.908 11.026,146.703 9.158 C 145.797 8.755,145.055 7.024,145.055 5.311 C 145.055 1.754,144.419 1.756,134.525 5.347 M35.378 165.835 C 26.945 168.424,2.915 197.419,2.358 205.678 C 2.145 208.850,18.427 226.374,21.587 226.374 C 28.825 226.374,63.736 196.163,63.736 189.900 C 63.736 187.212,56.049 177.011,47.258 168.033 C 43.466 164.161,41.822 163.856,35.378 165.835 " 
                            stroke="none" fill="#faf7eb" fill-rule="evenodd"></path></g>
                        </svg>
                        
                    </div>
                    {/* <a href="http://www.google.ca" className='contact-link'>CONTACT</a> */}
                    <h1>sean mombo</h1>
            
                </header>

                <div class="main-banner-content">  
                
                    {/* <h1>Hi! I'm Sean Mombourquette.<br/><span>&amp; indie game creator</span></h1> */}
                    <h1>

                    {/* options I like --------------------- */}
                    {/* Designer & Developer */}

                    Frontend<span className='span2'> </span>Developer




            {/* options idk if I like --------------------- */}

                    {/* Developer <span className='span1'>&</span> Designer */}
                    {/* Frontend Web Developer */}
                    
                    {/* Sean Mombo<br/><span className='span1'></span> */}
                    </h1>
                    <p>


                        {/* I'm self taught — with a degree. 
                        I'm a lifelong learner, and creative problem solver. 
                        I love it when a good challenge forces me to learn new skills. */}

                    {/* I'm self taught — with a degree.  */}

                    {/* I love it  */}


                    {/* I love the way a good challenge encourages growth and learning. */}
                    {/* I'm an enthusiastic learner, and creative problem solver.  */}

                    {/* Self taught — and I have a degree  */}

                    {/* The web is my domain<br/>—frontend and indie games */}
                    {/* The web is my domain<br/>I love to work and play<br/>Learn and then create<br/><br/>Frontend and indie games */}

                        {/* I honed my skills as an indie game developer, and present myself to you now as a frontend web developer */}
                    {/* Mad scientist — but still a scientist */}
                    {/* Experienced with frontend web projects and indie games */}
                        {/* Frontend Web Developer & Designer */}
                    
                    {/* Frontend Web Dev \ Indie Game Dev \ Designer & Creator */}
                    {/* My enthusiasm for learning pairs quite nicely with my insatiable curiosity. */}
                    {/* Riding the fine line between genius and insanity */}
                    {/* My excitement to create is rivaled only by my enthusiasm to learn  */}
                    {/* I have two boundless desires — learning and creating */}
                    I have two insatiable desires<br/>—to learn, and to create
                    {/* My design sensibilities were honed through a decade of indie game development */}
                    {/* The skills I don't currently have — I'll learn */}
                    </p>
                    
              
                </div>
                {/* <hr></hr> */}
                
            </div>
        )
    }
}

export default MainHeader;