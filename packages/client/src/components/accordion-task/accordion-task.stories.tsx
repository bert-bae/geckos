import React from 'react';
import { Story, Meta } from '@storybook/react';
import AccordionTask, { ExtendedAccordionProps } from './';

export default {
  title: 'AccordionTask',
  component: AccordionTask
} as Meta;

const Template: Story<ExtendedAccordionProps> = (args) => {
  return <AccordionTask {...args} />;
};

const mockDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum vel lectus sed auctor. Nulla vulputate orci lectus, vel aliquet turpis ultrices non. Nunc ut neque risus. Suspendisse at eros auctor, tempor est eu, interdum neque. Morbi eget urna eu sapien efficitur mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer volutpat felis non luctus pulvinar. Integer vulputate dui eu placerat faucibus.';

export const TypeTask = Template.bind({});
TypeTask.args = {
  TaskSummaryProps: {
    title: 'Hello world',
    link: 'https://www.google.ca',
    type: 'Task',
    onLinkClick: () => console.log('Dummy link click')
  },
  TaskDetailProps: {
    type: 'Task',
    description: mockDescription
  }
};

export const TypeEpic = Template.bind({});
TypeEpic.args = {
  TaskSummaryProps: {
    title: 'Hello world',
    link: 'https://www.google.ca',
    type: 'Epic',
    onLinkClick: () => console.log('Dummy link click')
  },
  TaskDetailProps: {
    type: 'Epic',
    description: mockDescription
  }
};

export const TypeBug = Template.bind({});
TypeBug.args = {
  TaskSummaryProps: {
    title: 'Hello world',
    link: 'https://www.google.ca',
    type: 'Bug',
    onLinkClick: () => console.log('Dummy link click')
  },
  TaskDetailProps: {
    type: 'Bug',
    description: mockDescription
  }
};
