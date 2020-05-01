import React from 'react';
import logo from './logo.svg';
import './App.css';


import MiddleBox from './components/middle-box/middle-box.component'
import Card from './components/card/card.component'
import Iphone from './components/iphone/iphone.component';
import Project from './components/project/project.component';
import Gridtile from './components/gridtile/gridtile.component'
import Intro from './components/intro/intro.component';

import MainBanner from './components/main-banner/main-banner.component';



function App() {
  return (
    <div className="App">
      <MainBanner/>
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

export default App;
