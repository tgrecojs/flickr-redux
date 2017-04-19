import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { searchImages } from '../../api';
import {selectImageAction, searchMediaAction} from './reducer'
import './style.css';
import {bindActionCreators} from 'redux';

import * as Actions from './reducer';
const ViewImages = ({images, selectImageAction, searchMediaAction, selectedImage}) => {
  let input;
 
  console.log(images);
  return (
   <div className="image-scroller">
   <div>
      <input type="text" ref = { 
        (node) => { input = node }
      } />
      <button onClick={() => searchMediaAction(input.value) }>Add quest</button>
    </div>
      <div>
       <h2> Images </h2>
    <div className="selected-image">
       <div key={selectedImage.id}>
        <h6>{selectedImage.title}</h6>
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
      </div>
    </div>
      </div>
       <div className="image-thumbs">
      {images.map((image, i) => (
       <div key={i} onClick={() => selectImageAction(image)}>
          <img src={image.mediaUrl} />
        </div>
      ))} </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapActionCreatorsToProps)(ViewImages)