import React from 'react';
import { Story, Meta } from '@storybook/react';
import SelectDropdown, { SelectDropdownProps } from './';

export default {
  title: 'SelectDropdown',
  component: SelectDropdown
} as Meta;

const Template: Story<SelectDropdownProps> = (args) => {
  return (
    <div style={{ width: '150px' }}>
      <SelectDropdown {...args} />
    </div>
  );
};

const mockSelectList = [
  {
    value: 0,
    label: 'zero'
  },
  {
    value: 1,
    label: 'one'
  },
  {
    value: 2,
    label: 'two'
  },
  {
    value: 3,
    label: 'three'
  }
];

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Number list',
  value: '',
  selectItems: mockSelectList,
  onChange: () => console.log('Dummy select dropdown change event')
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  value: '',
  selectItems: mockSelectList,
  onChange: () => console.log('Dummy select dropdown change event')
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  label: 'Number list',
  selectItems: mockSelectList,
  value: mockSelectList[0].value,
  onChange: () => console.log('Dummy select dropdown change event')
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Number list',
  value: '',
  selectItems: mockSelectList,
  error: 'Some input error!',
  onChange: () => console.log('Dummy select dropdown change event')
};
