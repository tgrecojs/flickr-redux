import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewImages from './features/gallery/ViewImages';
import { connect } from 'react-redux'
import { fetchImagesAction, searchMediaAction } from './features/gallery/reducer'
import { fetchImages } from './api'
import {bindActionCreators} from 'redux';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(searchMediaAction());
    // fetchImages('steamtown').then(i => console.log(i));
  }
  render() {
    const { images,selectedImage, dispatch} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button onClick={() => fetchImages('steamtown').then(i => console.log(i))}></button>
        <ViewImages images={images} selectedImage={selectedImage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  selectedImage: state.selectedImage
  }
}


export default connect(mapStateToProps,)(App);
