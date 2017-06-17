import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router' 
// import Nav from './features/navigation/';
const Nav = () => (
  <ul className="flex-nav">
    <li><Link to='/'>Home</Link></li>  
    <li><Link to='/featured'>Gallery of the Month</Link></li>  
    <li><Link to='/contact'>Contact Michael Today</Link> </li>  
  </ul>
);

class App extends Component {
 
  render() {
    // const { images,selectedImage, dispatch} = this.props;
    return (
      <div className="App">
      <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Michael Taluto Photography</h3>
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
