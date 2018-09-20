import React from 'react';
import { configure, shallow } from 'enzyme';
import Header from './index.js';
import Title from '@samuelgomez/sg-title';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test use Title in Header', () => {
  it('Title component is find Header Component', () => {
    const result = shallow(<Header />);
    expect(result.find(Title)).toBeTruthy();
  });
});
