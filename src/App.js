import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewImages from './features/gallery/ViewImages';
import { connect } from 'react-redux'
import { fetchImagesAction } from './features/gallery/reducer'
import { fetchImages } from './api'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchImagesAction());
    fetchImages('steamtown').then(i => console.log(i));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={() => fetchImages('steamtown').then(i => console.log(i))}></button>
        <ViewImages />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  images: state.images
  }
}


export default connect(mapStateToProps,)(App);
