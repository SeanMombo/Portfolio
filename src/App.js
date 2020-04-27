import React from 'react';
import logo from './logo.svg';
import './App.css';

import MiddleBox from './components/middle-box/middle-box.component'
import Card from './components/card/card.component'
import Iphone from './components/iphone/iphone.component';
import Project from './components/project/project.component';

function App() {
  return (
    <div className="App">
       <MiddleBox/>
      <div className="container">
      {/* <MiddleBox/> */}
        {/* <Iphone></Iphone>
        <Iphone></Iphone>
        <Iphone></Iphone> */}
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  );
}

export default App;
