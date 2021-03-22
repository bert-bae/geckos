import React from 'react';
import { Story, Meta } from '@storybook/react';
import TaskAccordion, { AccordionProps } from './';
import { GeckTaskTypes } from 'utils/graphql/generated/types';

export default {
  title: 'TaskAccordion',
  component: TaskAccordion
} as Meta;

const Template: Story<AccordionProps> = (args) => {
  return <TaskAccordion {...args} />;
};

const mockDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum vel lectus sed auctor. Nulla vulputate orci lectus, vel aliquet turpis ultrices non. Nunc ut neque risus. Suspendisse at eros auctor, tempor est eu, interdum neque. Morbi eget urna eu sapien efficitur mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer volutpat felis non luctus pulvinar. Integer vulputate dui eu placerat faucibus.';

export const TypeTask = Template.bind({});
TypeTask.args = {
  title: 'Hello world',
  link: 'https://www.google.ca',
  type: GeckTaskTypes.Task,
  onLinkClick: () => console.log('Dummy link click'),
  description: mockDescription
};

export const TypeEpic = Template.bind({});
TypeEpic.args = {
  title: 'Hello world',
  link: 'https://www.google.ca',
  type: GeckTaskTypes.Epic,
  onLinkClick: () => console.log('Dummy link click'),
  description: mockDescription
};

export const TypeBug = Template.bind({});
TypeBug.args = {
  title: 'Hello world',
  link: 'https://www.google.ca',
  type: GeckTaskTypes.Bug,
  onLinkClick: () => console.log('Dummy link click'),
  description: mockDescription
};
