import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { selectImageAction } from '../state/reducer';


const Images = ({images, selectImageAction}) => (
  <div className="image-thumbs">

  {
    images.map((image, i) => (
       <div key={i} onClick={() => selectImageAction(image)}>
          <img src={image.mediaUrl} />
       </div>
    ))
  }

</div>
)

const mapImageStateToProps = state => {
  return {
    images: state.images,
  }
}

export default connect(mapImageStateToProps,{selectImageAction})(Images);

