import React from 'react';
import { Story, Meta } from '@storybook/react';
import AppHeader, { AppHeaderProps } from './';

export default {
  title: 'AppHeader',
  component: AppHeader
} as Meta;

const Template: Story<AppHeaderProps> = (args) => {
  return <AppHeader {...args} />;
};

export const Default = Template.bind({});
