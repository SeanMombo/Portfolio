import React, {lazy, Suspense} from 'react';
// import logo from './logo.svg';

import './assets/bootstrap.min.css';
import './App.scss';
// import { BrowserRouter as Router,
//   Switch,
//   Route,
//   Link} from 'react-router-dom'

import MainPage from './Components/main-page/main-page.component';
import Navbar from './Components/navbar/navbar.component'
const PortfolioPage = lazy(() => import('./Components/portfolio-page/portfolio-page.component'));
// import ProjectModal from './components/project-modal/project-modal.component'

function watchForHover() {

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
        <Suspense fallback={<div>...loading</div>}>
        <PortfolioPage/>
        </Suspense>
       
      </div>
    );
  }
}

export default App;
