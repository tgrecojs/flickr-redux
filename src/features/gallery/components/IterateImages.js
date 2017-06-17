import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { searchImages } from '../../../api';
import {selectImageAction, searchMediaAction} from '../state/reducer';
import './style.css';
import {bindActionCreators} from 'redux';
import Images from './Images';
import * as Actions from '../state/reducer';
import SelectedImage from './SelectedImage';

const ViewFeaturedImages = ({ title = 'Browse All Images', images, selectImageAction, searchMediaAction, selectedImage = images[0]}) => {
  let input;
  return (
   <div className="image-scroller">
    <div>
      <SelectedImage {...selectedImage}/>
    </div>
      <div>
       <h2>{title}</h2>
      </div>
      <Images />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedImage: state.selectedImage,
    images: state.images
  }
}

export default connect(mapStateToProps)(ViewFeaturedImages)