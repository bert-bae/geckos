import React from 'react';
import { Story, Meta } from '@storybook/react';
import TaskDetailsDialog, { TaskFormDialogProps } from './';
import { GeckTaskTypes } from 'utils/graphql/types.generated';

export default {
  title: 'TaskDetailsDialog',
  component: TaskDetailsDialog
} as Meta;

const Template: Story<TaskFormDialogProps> = ({
  title,
  description,
  tags,
  type,
  creator
}) => {
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = React.useState({
    title: title || '',
    description: description || '',
    tags: tags || [],
    type: type || GeckTaskTypes.Epic,
    creator: creator || ''
  });

  const handleTaskFormChange = (
    event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    const target = event.target as HTMLInputElement & HTMLSelectElement;
    let value: string | string[] = target.value;

    if (target.name === 'tags') {
      value = value.split(',');
    }

    setFormState((prevFormState) => ({
      ...prevFormState,
      [target.name]: value
    }));
  };

  const handleTaskFormSubmit = () => {
    console.log(`---Form submit with---`);
    console.log(formState);
  };

  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>Open Dialog</button>
      <TaskDetailsDialog
        open={open}
        onTaskFormChange={handleTaskFormChange}
        onTaskFormSubmit={handleTaskFormSubmit}
        onTaskFormDialogClose={() => setOpen(false)}
        {...formState}
      />
    </div>
  );
};

export const Create = Template.bind({});
Create.args = {};

export const Edit = Template.bind({});
Edit.args = {
  type: GeckTaskTypes.Task,
  title: 'Task number one',
  creator: 'DummyUser',
  description: 'Some random multiline description',
  tags: ['tagOne', 'tagTwo', 'tagThree'],
  onTaskFormDialogClose: () => console.log('closed')
};
