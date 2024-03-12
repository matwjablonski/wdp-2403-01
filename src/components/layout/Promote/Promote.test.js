import React from 'react';
import { shallow } from 'enzyme';
import Promote from './Promote';

describe('Promote', () => {
  it('renders without crashing', () => {
    shallow(<Promote />);
  });
});
