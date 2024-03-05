import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Promotions from './Promotions';
import store from '../../../redux/store';

describe('Component Promotions', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Promotions />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
