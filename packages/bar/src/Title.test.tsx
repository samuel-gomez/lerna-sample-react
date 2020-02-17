import * as React from 'react';
import { create } from 'react-test-renderer';
import Title from './Title';

describe('<Title>', () => {
  it('should render a Title', () => {
    const component = create(<Title />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
