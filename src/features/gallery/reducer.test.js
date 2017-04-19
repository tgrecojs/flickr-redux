import imageReducer from './reducer';
import test from 'tape';


const defaultState = {
  images: ['https://farm3.staticflickr.com/2895/33240736124_447ec01bee.jpg', 'https://farm3.staticflickr.com/2904/34042636826_1a012432e3.jpg', 'https://farm3.staticflickr.com/2910/33271676693_1c3e6daeaf.jpg', 'https://farm3.staticflickr.com/2939/33952852201_7f8f62cda2.jpg'],
  loading: false,
  error: null,
  selectedImage : 'https://farm3.staticflickr.com/2895/33240736124_447ec01bee.jpg'
};

import { FETCH_IMAGES, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE, SELECTED_IMAGE } from './reducer';

// Replicate the reduce
const getExpectedImages = (props = {}) => Object.assign({}, defaultState, props);
const getExpectedimageReducer = (props = {}) => Object.assign({}, defaultState.imageReducer, props);


 const images = ['https://farm3.staticflickr.com/2895/33240736124_447ec01bee.jpg', 'https://farm3.staticflickr.com/2904/34042636826_1a012432e3.jpg', 'https://farm3.staticflickr.com/2910/33271676693_1c3e6daeaf.jpg', 'https://farm3.staticflickr.com/2939/33952852201_7f8f62cda2.jpg']


export default () => {
  test('imagesReducer with no args', assert => {
    const msg = 'should return a valid initial state';
    const initialState = imageReducer();

    const actual = imageReducer(initialState);

    const expected = getExpectedImages(defaultState);
    assert.same(actual, expected, msg);
    assert.end();
  });
  test('imageReducer given { type: FETCH_IMAGES_SUCCESS, payload: images}', assert => {
    const msg = 'should populate the images array using data from response';
    const initialState = imageReducer();
    const action = {
      type: FETCH_IMAGES_SUCCESS,
      payload: images
    }

    const actual = imageReducer(initialState, action);

    const expected = getExpectedImages({images, error: false,loading: false});
    assert.same(actual, expected, msg);
    assert.end();
  })
  test('imageReducer given { type: FETCH_IMAGES_FAILURE, payload: error}', assert => {
    const msg = 'should return an error message';
    const initialState = imageReducer();
    let error = 'An error occured.'
    const action = {
      type: FETCH_IMAGES_FAILURE,
      payload: error
    }

    const actual = imageReducer(initialState, action);

    const expected = getExpectedImages({images:[], error,loading: false});
    assert.same(actual, expected, msg);
    assert.end();
  })
  test('imageReducer given { type: SELECTED_IMAGE, payload: image}', assert => {
    const msg = 'should update our selectedImg state with a new img';
    const initialState = imageReducer();
    let image = 'https://farm3.staticflickr.com/2809/33887642345_6c1cce5114.jpg'
    const action = {
      type: SELECTED_IMAGE,
      payload: image
    }

    const actual = imageReducer(initialState, action);

    const expected = getExpectedImages({error: false, selectedImage: image});
    assert.same(actual, expected, msg);
    assert.end();
  })
}