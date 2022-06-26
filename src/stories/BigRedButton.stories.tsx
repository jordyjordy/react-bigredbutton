import React from 'react';

import { storiesOf } from '@storybook/react';

import BigRedButton from '../components/BigRedButton/BigRedButton';

const stories = storiesOf('Big Red Button', module);

stories.add('Button', () => {
    return (<BigRedButton sizeInPx={100} onClick={() => console.log('clicked!')} />);
});