import imageReducer from './reducer';
import test from 'tape';


const defaultState = {
  images: [],
  loading: null,
  error: null
};

// Replicate the reduce
const getExpectedImages = (props = {}) => Object.assign({}, defaultState.images, props);
const getExpectedQuestionsList = (props = {}) => Object.assign({}, defaultState.questionsList, props);


 const images = ['https://farm3.staticflickr.com/2895/33240736124_447ec01bee.jpg', 'https://farm3.staticflickr.com/2904/34042636826_1a012432e3.jpg', 'https://farm3.staticflickr.com/2910/33271676693_1c3e6daeaf.jpg', 'https://farm3.staticflickr.com/2939/33952852201_7f8f62cda2.jpg']


export default () => {
  test('imagesReducer with no args', assert => {
    const msg = 'should return a valid initial state';
    const initialState = imageReducer();

    const actual = imageReducer(initialState);

    const expected = getExpectedImages();
    assert.same(actual, expected, msg);
    assert.end();
  });
}