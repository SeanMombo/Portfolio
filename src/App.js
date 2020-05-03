import React from 'react';
import logo from './logo.svg';
import './App.scss';


import MiddleBox from './components/middle-box/middle-box.component'
import Card from './components/card/card.component'
import Iphone from './components/iphone/iphone.component';
import Project from './components/project/project.component';
import Gridtile from './components/gridtile/gridtile.component'
import Intro from './components/intro/intro.component';

import MainBanner from './components/main-banner/main-banner.component';
import Navbar from './components/navbar/navbar.component'
import AboutPage from './components/about-page/about-page.component'

class App extends React.Component {
//   componentDidMount() {
        
//     let elements = document.querySelectorAll('.rolling-text');

//     elements.forEach(element => {
//     let innerText = element.innerText;
//     element.innerHTML = '';
    
//     let textContainer = document.createElement('div');
//     textContainer.classList.add('block');
    
//     for (let letter of innerText) {
//         let span = document.createElement('span');
//         span.innerText = letter.trim() === '' ? '\xa0': letter;
//         span.classList.add('letter');
//         textContainer.appendChild(span);
//     }
    
//     element.appendChild(textContainer);
//     element.appendChild(textContainer.cloneNode(true));
//     });






//     elements.forEach(element => {
//     element.addEventListener('mouseover', () => {
//         element.classList.remove('play');
//     });
//     });

// }

  render() {
    return (
      <div className="App">
        <MainBanner/>
        <AboutPage/>
        {/* <Intro>
          
        </Intro>

        <div className="right">
          <Gridtile/>
          <Gridtile/>
          <Gridtile/> 
          <Gridtile/>
          <Gridtile/>
        </div> */}
      </div>
    );
  }
}

export default App;
