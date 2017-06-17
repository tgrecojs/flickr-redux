import React, { PropTypes } from 'react'
import {searchMediaAction} from '../state/reducer';
import { connect } from 'react-redux';

const SearchImages = ({searchMediaAction}) => {
  let input;
  return (
   <div className="flex-row-centered">
      <input type="text" ref = { 
        (node) => { input = node }
      } />
      <button onClick={() => { 
        searchMediaAction(input.value);
        input.value = '' 
      }
      }>Search Images</button>
    </div>
  )
}

export default connect(null, {searchMediaAction})(SearchImages)