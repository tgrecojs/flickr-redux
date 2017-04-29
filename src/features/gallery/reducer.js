export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE'
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
export const SELECTED_IMAGE = 'SELECTED_IMAGE'
export const SEARCH_PHOTOS_REQUEST = 'SEARCH_PHOTOS_REQUEST'
export const FETCH_PHOTOSETS_SUCCESS = 'FETCH_PHOTOSETS_SUCCESS';
export const FETCH_PHOTOSETS = 'FETCH_PHOTOSETS';
export const FETCH_PHOTOSETS_FAILURE = 'FETCH_PHOTOSETS_FAILURE';
export const FETCH_FEATURED_IMAGES = 'FETCH_FEATURED_IMAGES';
export const FETCH_FEATURED_IMAGES_SUCCESS = 'FETCH_FEATURED_IMAGES_SUCCESS';
export const FETCH_FEATURED_IMAGES_FAILURE = 'FETCH_FEATURED_IMAGES_FAILURE'
export const FLICKR_PHOTOSET_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_INFO.API_KEY}&photoset_id=72157680541050880&user_id=147715418%40N02&format=json&nojsoncallback=1`;
export const FETCH_FEATURE_IMAGES_FAILURE = 'FETCH_FEATURE_IMAGES_FAILURE';
export const SUBMIT_FORM = 'SUBMIT_FORM'


import * as API_INFO from '../../api'
import axios from 'axios';
// import cuid from 'cuid';
import configureStore from '../../configureStore'

 export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
/** store.dispatch(fetchPosts('reactjs'))

export const fetchPosts = (subreddit) => {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(fetchPhotosets())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(FLICKR_PHOTOSET_ENDPOINT)
      .then(response => response.json())
      .then(json => {

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        const featuredPhotos = json.photoset.photo;
        // console.log(featuredPhotos)
        dispatch(fetchImagesSuccessAction(featuredPhotos))
      })

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
**/
export const defaultState = {
  images: ['https://farm3.staticflickr.com/2895/33240736124_447ec01bee.jpg', 'https://farm3.staticflickr.com/2904/34042636826_1a012432e3.jpg', 'https://farm3.staticflickr.com/2910/33271676693_1c3e6daeaf.jpg', 'https://farm3.staticflickr.com/2939/33952852201_7f8f62cda2.jpg'],
  loading: false,
  error: null,
  selectedImage: 'https://farm3.staticflickr.com/2904/34042636826_1a012432e3.jpg',
  featuredImages: []
}
export const searchMediaAction = (payload) => ({
  type: SEARCH_PHOTOS_REQUEST,
  payload
});



export const fetchImagesAction = () => ({
  type: FETCH_IMAGES
})

export const fetchFeaturedGallery = () => ({
  type: FETCH_FEATURED_IMAGES
});

export const fetchPhotosetImages = (images) => ({
  type: FETCH_PHOTOSETS_SUCCESS,
  payload: images
})

export const fetchPhotosetsFailure = (error) => ({
  type: FETCH_PHOTOSETS_FAILURE,
  payload: error
})
export const fetchFeaturedImagesSuccessAction = (featuredImages) => ({
  type: FETCH_FEATURED_IMAGES_SUCCESS,
  payload: featuredImages
})


export const fetchImagesSuccessAction = (images) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images
})

export const selectImageAction = ({id, mediaUrl, title}) => ({
  type: SELECTED_IMAGE,
  payload: {id, mediaUrl, title }
});


const imageReducer = (state = defaultState, action = {}) => {
  let error;
  switch(action.type){
    case FETCH_IMAGES: return { ...state, loading: true};
    case FETCH_IMAGES_SUCCESS: return { ...state, images: action.payload, loading: false, error: false};
    case FETCH_IMAGES_FAILURE: return { ...state, images: [], loading: false, error: action.payload };
    case FETCH_FEATURED_IMAGES: return { ...state, loading: true};
    case SUBMIT_FORM: return { ...state, formData: action.payload};
    case FETCH_FEATURED_IMAGES_SUCCESS: return { ...state, featuredImages: action.payload }
    case FETCH_FEATURED_IMAGES_FAILURE: return { ...state, featuredImages: [], error: action.payload };
    //case FETCH_PHOTOSETS_SUCCESS: return { ...state, loading: false, photosets: action.payload};
    //case FETCH_PHOTOSETS_FAILURE: return { ...state, images: state.images, loading: false, error: false, photosets: action.payload }
    case SELECTED_IMAGE: return { ...state, loading: false, error: false, selectedImage: action.payload}
  default: return state 
  }
} 

export default imageReducer