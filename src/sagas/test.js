import test from 'tape';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { delay } from 'redux-saga'
import { getImages } from './index'


export default () => {
test('incrementAsync Saga test', (assert) => {
  const gen = getImages();
  console.log(gen)

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
});
}