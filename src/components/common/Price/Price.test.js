import React from 'react';
import { shallow } from 'enzyme';
import Price from './Price';

describe('Component Price', () => {
  it('should render without crashing', () => {
    const component = shallow(<Price price={10} />);
    expect(component).toBeTruthy();
  });
});
