import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage.js';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });
});
