import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from 'events'; // cannot get EventEmitter to work
import './styles/app.css';
//import Nav from './components/layout/Nav'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeScreenIndex: 1
    }
  }


// cannot get EventEmitter to work
  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigateScreen", ({activeScreenIndex}) => {
      this.updateScreen({newScreenIndex: activeScreenIndex})
    })
  }

  updateScreen(newScreenIndex) {
    this.setState({activeScreenIndex: newScreenIndex})
  }

  render() {
    //var activeScreenIndex = 1;
    var activeScreen;

    if(this.state.activeScreenIndex === 1) {
      activeScreen = <Home />
    }
    if(this.state.activeScreenIndex === 2) {
      activeScreen = <Contact />
    }
    if(this.state.activeScreenIndex === 3) {
      activeScreen = <About />
    }

    return (
      <div className="app">
        <div className="app-header">
        </div>
        <div className="app-wrapper">
          <div className="app-nav">
            <div
              className={this.state.activeScreenIndex === 1 ? "nav-item home active-nav" : "nav-item home"}
              onClick={(event) => { this.updateScreen(1) }} >
              <p>Home</p>
            </div>
            <div
              className={this.state.activeScreenIndex === 2 ? "nav-item contact active-nav" : "nav-item contact"}
              onClick={(event) => { this.updateScreen(2) }} >
              <p>Contact</p>
            </div>
            <div
              className={this.state.activeScreenIndex === 3 ? "nav-item about active-nav" : "nav-item about"}
              onClick={(event) => { this.updateScreen(3) }} >
              <p>About</p>
            </div>
        </div>
          <div className="main-content">
            {activeScreen}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
