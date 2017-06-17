import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewImages from './features/gallery/components/IterateImages';
import { connect } from 'react-redux'
import {fetchPhotosets, fetchPhotosetsSuccess, fetchPhotosetsFailure, searchMediaAction} from './features/gallery/state/reducer'
import SearchImages from './features/gallery/components/Search';
import { fetchImages, fetchFullGallery } from './api'
import {bindActionCreators} from 'redux';

  
import axios from 'axios';

class FullGallery extends Component {
  componentDidMount() {
    this.props.dispatch(searchMediaAction())
  
  } 
  
  
  componentWillReceiveProps(NextProps) {
    console.log('componentWillReceiveProps', NextProps);
    console.log('Old Props =>', this.props)
    NextProps.dispatch(searchMediaAction())
  }

  render() {
    // let { images } = this.props
    return (
      <div className="image-page">
        <SearchImages />
        <ViewImages />
      </div>
    );
  }
}


export default connect()(FullGallery);
