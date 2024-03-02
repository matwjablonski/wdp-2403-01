import React from 'react';
import { shallow } from 'enzyme';
import PanelBar from './PanelBar';

describe('Component PanelBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<PanelBar />);
    expect(component).toBeTruthy();
  });
});
