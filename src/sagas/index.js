import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { searchImages, fetchImages } from '../api';
import { SEARCH_PHOTOS_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE, SELECTED_IMAGE } from '../features/gallery/reducer';

function* getImages({payload}) {
   try {
      const images = yield call(fetchImages, payload);
      yield [ 
      put({type: FETCH_IMAGES_SUCCESS, payload: images}),
      put({type: SELECTED_IMAGE, image: images[0]}) ]
   } catch (e) {
      yield put({type: FETCH_IMAGES_FAILURE, payload: e.message});
   }
}


function* rootSaga() {
  yield takeLatest(SEARCH_PHOTOS_REQUEST, getImages)
}

export default rootSaga