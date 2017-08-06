import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router' 
import talutoLogo from './taluto-logo-white.svg';
// import Nav from './features/navigation/';
/**
 * Facebook button
 *  <li><div className="fb-follow" 
    data-href="https://www.facebook.com/publicityphotosmt/" data-layout="button" data-size="large" data-show-faces="true"></div></li>
 * 
 */
const Nav = () => (
  <ul className="flex-nav">
    <li><Link to='/'>Home</Link></li>  
    <li><Link to='/featured'>Gallery of the Month</Link></li>  
    <li><a href="https://www.facebook.com/publicityphotosmt/">
    Follow on Facebook
    </a></li>
    <li>
      <a href="mailto:mike@taluto.com">Email Mike</a>
    </li>
  </ul>
);

class App extends Component {
 
  render() {
    // const { images,selectedImage, dispatch} = this.props;
    return (
      <div className="App">
      <Nav />
        <div className="App-header">
          <img src={talutoLogo} />
        </div>
        <div>
        { this.props.children }
        </div>
        <footer>
          <p>Created by <a href="https://github.com/thomasjosephgreco/">Thomas Greco</a> 2017</p>
        </footer>
      </div>
    );
  }
}


export default App;
