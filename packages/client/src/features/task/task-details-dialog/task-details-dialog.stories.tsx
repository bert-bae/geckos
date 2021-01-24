import React from 'react';
import { Story, Meta } from '@storybook/react';
import TaskDetailsDialog, { TaskFormDialogProps } from './';

export default {
  title: 'TaskDetailsDialog',
  component: TaskDetailsDialog
} as Meta;

const Template: Story<TaskFormDialogProps> = (args) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>Open Dialog</button>
      <TaskDetailsDialog open={open} {...args} />
    </div>
  );
};
export const Filled = Template.bind({});
Filled.args = {};
