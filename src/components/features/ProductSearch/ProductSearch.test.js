import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import ProductSearch from './ProductSearch';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
