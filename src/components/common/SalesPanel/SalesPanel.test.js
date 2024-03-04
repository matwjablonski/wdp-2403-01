import React from 'react';
import { shallow } from 'enzyme';
import SalesPanel from './SalesPanel';

describe('Component SalesPanel', () => {
  it('should render without crashing', () => {
    const sales = { filePath: 'test' };
    const component = shallow(<SalesPanel sales={sales} />);
    expect(component).toBeTruthy();
  });
});
