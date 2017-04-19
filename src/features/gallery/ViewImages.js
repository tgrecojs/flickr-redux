import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { searchImages } from '../../api';
import {selectImageAction} from './reducer'

const ViewImages = ({images, onHandleSelectImage, selectedImage}) => {
  let input;
  return (
   <div className="image-scroller">

      <div>
       <h2> Images </h2>
    <div className="selected-image">
      <div key={selectedImage.id}>
        <h6>{selectedImage.title}</h6>
        <img src={selectedImage} alt={selectedImage.title} />
      </div>
    </div>
      </div>
      {images.map((image, i) => (
       <div key={i}>
          <img src={image} onClick={() => onHandleSelectImage(image)}/>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}
const mapDispatchToProps = (dispatch) => ({
  onHandleSelectImage: (image) => {
    dispatch(selectImageAction(image));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewImages)