import React, { Component, PropTypes } from 'react';
import ViewImages from '../features/gallery/components/IterateImages';
import { connect } from 'react-redux'
import * as Actions from '../features/gallery/state/reducer'
import {bindActionCreators} from 'redux';

class FeaturedGallery extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.fetchFeaturedGallery())
  }

  render() {
    return (
      <div className="image-page">
        <ViewImages title="Featured Gallery" />
      </div>
    );
  }
}



export default connect()(FeaturedGallery);
