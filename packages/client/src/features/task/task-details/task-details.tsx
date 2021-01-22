import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// This component is temporary as an example of using the generated hooks

type CreateTaskFormState = {
  title: string;
  description: string;
  tags: string[];
};

const formInitialState: CreateTaskFormState = {
  title: '',
  description: '',
  tags: []
};

const TaskDetails = () => {
  const [formState, setFormState] = React.useState<CreateTaskFormState>(
    formInitialState
  );

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prevFormState) => ({
      ...prevFormState,
      [event.target.name]: event.target.value
    }));

  const handleFormSubmit = () => {
    console.log('Attempting to save the form...');
  };

  return (
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
  );
};

export default TaskDetails;
