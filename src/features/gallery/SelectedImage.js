import React from 'react'

const SelectedImage = ({id, title = 'Click a Photo', mediaUrl}) => {
  return (
    <div className="selected-image">
       <div key={id}>
        <h6>{title}</h6>
        <img src={mediaUrl} alt={title} />
      </div>
    </div>
  )
}

export default SelectedImage;