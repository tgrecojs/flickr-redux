import React, { Component, PropTypes } from 'react';
import ViewImages from '../features/gallery/components/IterateImages';
import { connect } from 'react-redux'
import * as Actions from '../features/gallery/state/reducer'
import {bindActionCreators} from 'redux';
import SearchImages from '../features/gallery/components/Search';

class FullGallery extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.searchMediaAction())
  }
  
  
  componentWillReceiveProps(NextProps) {
    console.log('componentWillReceiveProps', NextProps);
    console.log('Old Props =>', this.props)
    NextProps.dispatch(Actions.searchMediaAction())
  }
  render() {
    return (
      <div className="image-page">
        <SearchImages />
        <ViewImages title="All Images" />
      </div>
    );
  }
}


export default connect()(FullGallery);
