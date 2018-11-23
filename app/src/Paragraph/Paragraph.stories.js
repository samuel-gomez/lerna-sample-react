import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Paragraph from '.';

storiesOf('App.Paragraph', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('without props', () => <Paragraph info={text('info', 'test')} />);
