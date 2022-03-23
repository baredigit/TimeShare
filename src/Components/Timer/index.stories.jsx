import React from 'react';
import Timer from './index';
import TimerCard from '../TimerCard'

export default {
  title: 'Timer/Timer',
  component: Timer
};

const Template = (args) => <Timer {...args} />;

export const RowOne = Template.bind({});
RowOne.args = {
  config: [
    { id: 1, totalSeconds: 120 }
  ]
}

export const RowTwo = Template.bind({});
RowTwo.args = {
  config: [
    { id: 1, totalSeconds: 120 },
    { id: 2, totalSeconds: 240, type: 'secondary' }
  ]
}

export const CardOne = Template.bind({});
CardOne.args = {
  config: [
    { id: 1, totalSeconds: 120, Component: TimerCard }
  ]
}

