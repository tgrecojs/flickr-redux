export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE'
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
export const SELECTED_IMAGE = 'SELECTED_IMAGE'


export const defaultState = {
  images: ['https://farm3.staticflickr.com/2895/33240736124_447ec01bee.jpg', 'https://farm3.staticflickr.com/2904/34042636826_1a012432e3.jpg', 'https://farm3.staticflickr.com/2910/33271676693_1c3e6daeaf.jpg', 'https://farm3.staticflickr.com/2939/33952852201_7f8f62cda2.jpg'],
  loading: false,
  error: null,
  selectedImage: { src: 'https://farm3.staticflickr.com/2904/34042636826_1a012432e3.jpg', title: 'title', id:  34042636826 }
}

export const fetchImagesAction = () => ({
  type: FETCH_IMAGES
})

export const fetchImagesSuccessAction = (images) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images
})

export const selectImageAction = (image) => ({
  type: SELECTED_IMAGE,
  payload: image
});

const imageReducer = (state = defaultState, action = {}) => {
  let error;
  switch(action.type){
    case FETCH_IMAGES: return { ...state, loading: true};
    case FETCH_IMAGES_SUCCESS: return { ...state, images: action.payload, loading: false, error: false};
    case FETCH_IMAGES_FAILURE: return { ...state, images: [], loading: false, error: action.payload}
    case SELECTED_IMAGE: return { ...state, loading: false, error: false, selectedImage: action.payload}
  default: return state 
  }
} 

export default imageReducer