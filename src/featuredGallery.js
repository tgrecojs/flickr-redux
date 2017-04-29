import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewFeaturedImages, { SelectedImage } from './features/gallery/IterateFeaturedImages';
import { connect } from 'react-redux'
import * as Actions from './features/gallery/reducer'
import { fetchImages, fetchFeaturedGallery } from './api'
import {bindActionCreators} from 'redux';

class FeaturedGallery extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.fetchFeaturedGallery())
  }

  render() {
    return (
      <div className="image-page">
        <ViewFeaturedImages />
      </div>
    );
  }
}



export default connect()(FeaturedGallery);
