import { fetchImages } from '../api'
import { call, put } from 'redux-saga'

export function* loadImages() {
  try {
   //1st step
    const images = yield call(fetchImages);
   //2nd step
    yield put({type: 'FETCH_IMAGES_SUCCESS', payload: images});
  } catch(error) {
    yield put({type: 'FETCH_IMAGES_FAILURE', payload: error});
  }
}
