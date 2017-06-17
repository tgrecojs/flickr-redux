import React from 'react'

const SelectedImage = ({id, title = 'Click a Photo', mediaUrl}) => {
  return (
    <div className="selected-image">
       <div className="flex-col" key={id}>
        <h3>{title}</h3>
        <img src={mediaUrl} alt={title} />
      </div>
    </div>
  )
}

export default SelectedImage;