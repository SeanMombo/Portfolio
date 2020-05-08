import React from 'react';
import logo from './logo.svg';
import './App.scss';


import MiddleBox from './components/middle-box/middle-box.component'
import Card from './components/card/card.component'
import Iphone from './components/iphone/iphone.component';
import Project from './components/project/project.component';
import Gridtile from './components/gridtile/gridtile.component'
import Intro from './components/intro/intro.component';

import MainHeader from './components/main-banner/main-banner.component';
// import MainHeader2 from './components/main-banner2/main-banner2.component';
import Navbar from './components/navbar/navbar.component'
import AboutPage from './components/about-page/about-page.component'

class App extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">


        <Navbar/>
        <MainHeader/>
        {/* <AboutPage/> */}

      </div>
    );
  }
}

export default App;
