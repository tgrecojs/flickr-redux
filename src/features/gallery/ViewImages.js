import React from 'react'
import { connect } from 'react-redux';
import { searchImages } from '../../api';
const ViewImages = ({images}) => {
  return (
   <div className="image-scroller">
      {images.map((image, index) => (
       <div key={index} >
          <img src={image}/>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ViewImages)