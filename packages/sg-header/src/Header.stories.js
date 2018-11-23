import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';
import README from './README.md';
import Header from '.';

storiesOf('Packages.Header', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', color: 'red' }}>{story()}</div>
  ))
  .addDecorator(withReadme(README))
  .add('without props', () => <Header />);
