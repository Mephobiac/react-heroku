import React, { Component } from 'react';
import { EventEmitter } from 'events'; // cannot get EventEmitter to work

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="app-nav">
        <div
          className={this.props.activeScreenIndex === 1 ? "nav-item home active-nav" : "nav-item home"}
          onClick={(event) => { this.props.eventEmitter.emit("navigateScreen", {activeScreenIndex: 1}) }}>
          <p>Home</p>
        </div>
        <div
          className={this.props.activeScreenIndex === 2 ? "nav-item contact active-nav" : "nav-item contact"}
          onClick={(event) => { this.props.eventEmitter.emit("navigateScreen", {activeScreenIndex: 2}) }}>
          <p>Contact</p>
        </div>
        <div
          className={this.props.activeScreenIndex === 3 ? "nav-item about active-nav" : "nav-item about"}
          onClick={(event) => { this.props.eventEmitter.emit("navigateScreen", {activeScreenIndex: 3}) }}>
          <p>About</p>
        </div>
      </div>
    );
  }
}

export default Nav;
