import imageReducer, {defaultState} from './features/gallery/reducer';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootSaga from './sagas';

export default function configureStore(initialState = defaultState) {
  // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(imageReducer, initialState, applyMiddleware(/* other middleware, */sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  }
}