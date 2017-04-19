import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { searchImages, fetchImages } from '../api';
import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from '../features/gallery/reducer';

function* getImages(action) {
   try {
      const images = yield call(fetchImages, action.payload);
      yield put({type: FETCH_IMAGES_SUCCESS, payload: images});
   } catch (e) {
      yield put({type: FETCH_IMAGES_FAILURE, payload: e.message});
   }
}


function* rootSaga() {
  yield takeLatest('FETCH_IMAGES', getImages)
}

export default rootSaga