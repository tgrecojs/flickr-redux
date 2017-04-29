import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { searchImages } from '../../api';
import {selectImageAction, searchMediaAction} from './reducer'
import './style.css';
import {bindActionCreators} from 'redux';

import * as Actions from './reducer';
import SelectedImage from './SelectedImage'
const ViewFeaturedImages = ({featuredImages, selectImageAction, searchMediaAction, selectedImage = featuredImages[0]}) => {
  let input;
 
  return (
   <div className="image-scroller">
    <div>
      <SelectedImage {...selectedImage}/>
    </div>
      <div>
       <h2>Featured Gallery</h2>
      </div>
       <div className="image-thumbs">
      {featuredImages.map((image, i) => (
       <div key={i} onClick={() => selectImageAction(image)}>
          <img src={image.mediaUrl} />
        </div>
      ))} </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    featuredImages: state.featuredImages,
    selectedImage: state.selectedImage,
  }
}
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapActionCreatorsToProps)(ViewFeaturedImages)