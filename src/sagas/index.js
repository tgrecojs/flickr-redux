import { call, put } from 'redux-saga/effects'
import { searchImages } from '../api';
function* fetchData(action) {
   try {
      const images = yield call(searchImages)
      yield put({type: "FETCH_IMAGES_SUCCEESS", payload: images})
   } catch (error) {
      yield put({type: "FETCH_IMAGES_FAILURE", error})
   }
}

export default fetchData;