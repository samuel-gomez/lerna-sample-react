import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';
import README from './README.md';
import { text } from '@storybook/addon-knobs';
import Title from '.';

storiesOf('Packages.Title', module)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .addDecorator(withReadme(README))
  .add('without props', () => <Title name={text('name', 'samuel')} />);
