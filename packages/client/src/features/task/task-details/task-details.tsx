import React from 'react';
import { GeckTaskTypes } from 'utils/graphql/types.generated';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useCreateTaskMutation } from '../queries/create-task.generated';

// This component is temporary as an example of using the generated hooks

type CreateTaskFormState = {
  type: GeckTaskTypes;
  title: string;
  description: string;
  tags: string[];
};

const formInitialState: CreateTaskFormState = {
  type: GeckTaskTypes.Epic,
  title: '',
  description: '',
  tags: []
};

const TaskDetails = () => {
  const [createTask, { data }] = useCreateTaskMutation();

  const [formState, setFormState] = React.useState<CreateTaskFormState>(
    formInitialState
  );

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prevFormState) => ({
      ...prevFormState,
      [event.target.name]: event.target.value
    }));

  const handleFormSubmit = () => {
    createTask({ variables: formState });
  };

  return (
    <>
      <form>
        <TextField
          label="title"
          name="title"
          onChange={handleFormChange}
          value={formState.title}
        />
        <TextField
          label="description"
          name="description"
          onChange={handleFormChange}
          value={formState.description}
        />
        <Button onClick={handleFormSubmit}>Submit</Button>
      </form>
      {data && <div>{JSON.stringify(data, null, 2)}</div>}
    </>
  );
};

export default TaskDetails;
