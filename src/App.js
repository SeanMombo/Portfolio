import React from 'react';
// import logo from './logo.svg';
import './App.scss';

// import { BrowserRouter as Router,
//   Switch,
//   Route,
//   Link} from 'react-router-dom'

import MainPage from './components/main-page/main-page.component';
import PortfolioPage from './components/portfolio-page/portfolio-page.component'
import Navbar from './components/navbar/navbar.component'
// import ProjectModal from './components/project-modal/project-modal.component'

function watchForHover() {
  // lastTouchTime is used for ignoring emulated mousemove events
  // that are fired after touchstart events. Since they're
  // indistinguishable from real events, we use the fact that they're
  // fired a few milliseconds after touchstart to filter them.
  let lastTouchTime = 0

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return
    document.body.classList.add('hasHover')
  }

  function disableHover() {
    document.body.classList.remove('hasHover')
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date()
  }

  document.addEventListener('touchstart', updateLastTouchTime, true)
  document.addEventListener('touchstart', disableHover, true)
  document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

class App extends React.Component {
  
  componentDidMount() {
    watchForHover()
  }

  render() {
    return (
      <div className="App">
        {/* <Navbar/> */}
        <Navbar/>
        <br/>
   
        <MainPage/>
        <PortfolioPage/>
        
        {/* <Router>
          <Navbar/>

        
          <Switch>
            <Route path="/about">
              <div></div>
            </Route>
            
            <Route path="/portfolio">
              <PortfolioPage/>
            </Route>

            <Route path="/">
              <MainPage/>
              <PortfolioPage/>
            </Route>
          </Switch>

        </Router> */}

      </div>
    );
  }
}

export default App;
