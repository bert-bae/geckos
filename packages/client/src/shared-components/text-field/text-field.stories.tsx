import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextField, { TextFieldProps } from './';

export default {
  title: 'TextField',
  component: TextField
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: 'Example Lable',
  value: 'Filled in',
  variant: 'filled'
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Example Label',
  value: 'Filled in',
  variant: 'outlined'
};
