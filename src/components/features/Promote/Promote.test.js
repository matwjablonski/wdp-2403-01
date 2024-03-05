import React from 'react';
import { shallow } from 'enzyme';
import Promote from './Promote';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Promote', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Promote />
      </Provider>
    );
  });
});
