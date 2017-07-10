import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import './style.css';
import Images from './Images';
import SelectedImage from './SelectedImage';

const ViewFeaturedImages = ({ title = 'Browse All Images'}) => {
  let input;
  return (
    <div>
      <SelectedImage />
        <h2>{title}</h2>
        <hr width="90%" />
      <Images />
    </div>
  )
}

export default connect()(ViewFeaturedImages)