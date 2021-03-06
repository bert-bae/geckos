import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './';

export default {
  title: 'Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary Button'
};
