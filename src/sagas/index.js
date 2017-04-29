import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { searchImages, fetchImages, fetchFeaturedGallery } from '../api';
import {  FETCH_FEATURED_IMAGES_SUCCESS, FETCH_FEATURED_IMAGES_FAILURE,FETCH_FEATURED_IMAGES,SEARCH_PHOTOS_REQUEST, FETCH_PHOTOSET_IMAGES, FETCH_IMAGES_SUCCESS, FETCH_PHOTOSET_IMAGES_SUCCESS, FETCH_PHOTOSET_IMAGES_FAILURE,FETCH_PHOTOSETS,FETCH_IMAGES_FAILURE, SELECTED_IMAGE } from '../features/gallery/reducer';

export function* getImages({payload}) {
   try {
      const images = yield call(fetchImages, payload);
      yield [ 
      put({type: FETCH_IMAGES_SUCCESS, payload: images}),
      put({type: SELECTED_IMAGE, image: images[0]}) ]
   } catch (e) {
      yield put({type: FETCH_IMAGES_FAILURE, payload: e.message});
   }
} 

 function* getFeaturedGalleryImages({payload}) {
   try {
      const images = yield call(fetchFeaturedGallery, payload);
      yield [
      put({type: FETCH_FEATURED_IMAGES_SUCCESS, payload: images}),
      put({type: SELECTED_IMAGE, image: images[0]})
      ]
   } catch (e) {
      yield put({type: FETCH_FEATURED_IMAGES_FAILURE, payload: e.message});
   }
} 



function* rootSaga() {
  yield [ 
    takeLatest(SEARCH_PHOTOS_REQUEST, getImages),
    takeLatest(FETCH_FEATURED_IMAGES, getFeaturedGalleryImages)
  ]
}

export default rootSaga