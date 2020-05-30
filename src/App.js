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

class App extends React.Component {

  componentDidMount() {
    
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
