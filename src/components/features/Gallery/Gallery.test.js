import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
