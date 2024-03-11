import React from 'react';
import { shallow } from 'enzyme';
import PanelMenu from './PanelMenu';

describe('Component PanelMenu', () => {
  const categories = [{ id: '1', name: 'featured' }];

  it('should render without crashing', () => {
    const component = shallow(<PanelMenu menuItems={categories} />);
    expect(component).toBeTruthy();
  });
});
