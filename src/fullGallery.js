import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewImages, { SelectedImage } from './features/gallery/ViewImages';
import { connect } from 'react-redux'
import {fetchPhotosets, fetchPhotosetsSuccess, fetchPhotosetsFailure, searchMediaAction} from './features/gallery/reducer'
import { fetchImages, fetchFullGallery } from './api'
import {bindActionCreators} from 'redux';

  
import axios from 'axios';

const iteratePhotosets = (props) => {
  // console.log({photosets})
  return (
    <ul>
    {this.props.map(x => {
      <li key={x.id}>{x.farm}</li>
    })}
    </ul>
  )
}
const SinglePhotoset = props => {
  const allPhotosets = props.data;
  let photosets = allPhotosets.map(x => 
      <li value={x.id} key={x.id}>{x.title._content}</li>
  )
  return (
    <ul>
      {photosets}
    </ul>
  )
}
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
        <ViewImages />
      </div>
    );
  }
}


export default connect()(FullGallery);
