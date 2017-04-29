import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewImages from './features/gallery/ViewImages';
import { connect } from 'react-redux'
import {fetchPhotosets, fetchPhotosetsSuccess, fetchPhotosetsFailure, searchMediaAction} from './features/gallery/reducer'
import { fetchImages, fetchImagesByPhotoset } from './api'
import {bindActionCreators} from 'redux';
import * as Actions from './features/gallery/reducer' 
  const PHOTOSET_ENDPOINT = ' https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=a46a979f39c49975dbdd23b378e6d3d5&user_id=147715418%40N02&format=json&nojsoncallback=1'
 import { Link } from 'react-router' 
import axios from 'axios';

class App extends Component {
 
  render() {
    // const { images,selectedImage, dispatch} = this.props;
    return (
      <div className="App">
      <ul className="flex-nav">
        <Link to='/'>Home</Link>
        <Link to='/featured'>Gallery of the Month</Link>
        <Link to='/contact'>Contact Michael Today</Link>
      </ul>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Michael Taluto Photography</h3>
        </div>
        <div>
        { this.props.children }
        </div>
        
      </div>
    );
  }
}


export default App;
