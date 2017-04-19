export const defaultState = {
  images: [],
  loading: null,
  error: null
}

const FETCH_IMAGES = 'FETCH_IMAGES';
const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE'
const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
const imageReducer = (state = defaultState, action = {}) => {
  let error;
  switch(action.type){
    case FETCH_IMAGES: return { ...state, loading: true};
    case FETCH_IMAGES_SUCCESS: return { ...state, images: [action.payload], error: false};
    case FETCH_IMAGES_FAILURE: return { ...state, images: [], loading: null, error: error.message}
  default: return state 
  }
} 

export default imageReducer