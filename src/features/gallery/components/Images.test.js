import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
const store = configureStore();

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

import Images from './Images';

const mockImages = [
  { id: 0, mediaUrl: 'https://farm3.staticflickr.com/2950/33240749644_f29a6c3704.jpg' },
  { id: 1, mediaUrl: 'https://farm3.staticflickr.com/2910/33271676693_1c3e6daeaf.jpg'},
  { id: 2, mediaUrl: 'https://farm3.staticflickr.com/2950/33698683960_e707301a01.jpg'},
  { id: 3, mediaUrl: 'https://farm3.staticflickr.com/2950/33698683960_e707301a01.jpg '}
];

export default () => {
  test('Testing Images component output if isActive set', (assert) => {
    renderer.render(
      <Provider store={store}>
        <Images images={mockImages} />
      </Provider>
      );

    const msg = 'Should render a connect component with the mockImages';
    const expected = `<Connect images={[{id: 0, mediaUrl: \'https://farm3.staticflickr.com/2950/33240749644_f29a6c3704.jpg\'}, {id: 1, mediaUrl: \'https://farm3.staticflickr.com/2910/33271676693_1c3e6daeaf.jpg\'}, {id: 2, mediaUrl: \'https://farm3.staticflickr.com/2950/33698683960_e707301a01.jpg\'}, {id: 3, mediaUrl: \'https://farm3.staticflickr.com/2950/33698683960_e707301a01.jpg \'}]} />`
    
    const actual = renderer.getRenderOutput();

    assert.jsxEquals(actual, expected, msg);
    assert.end();
    test('Nested Test --', assert => {
      const msg = 'should run inside the big test';
    const actual = renderer.getRenderOutput();
      const expected = 'something';
          assert.jsxEquals(actual, expected, msg);

      assert.end();
    })
  });
}