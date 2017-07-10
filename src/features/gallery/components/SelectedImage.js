import React from 'react'
import { connect } from 'react-redux';

const imageBorder = {
    border: '3px solid #ae4d54',
    borderRadius: '2px'
};

const SelectedImage = ({images, selectedImage = images[0]}) => {
  const {id, title = 'Click a Photo', mediaUrl} = selectedImage;
  return (
    <div className="selected-image">
       <div className="flex-col" key={id}>
        <h3>{title}</h3>
        <img style={{...imageBorder}} src={mediaUrl} alt={title} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}

export default connect(mapStateToProps)(SelectedImage);