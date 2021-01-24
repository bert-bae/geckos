import React from 'react';
import { GeckTaskTypes } from 'utils/graphql/types.generated';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export type TaskFormFieldProps = {
  type?: GeckTaskTypes;
  title?: string;
  description?: string;
  tags?: string[];
  creator?: string;
};

export type TaskFormProps = {
  type?: GeckTaskTypes;
  title?: string;
  description?: string;
  tags?: string[];
  creator?: string;
  onTaskFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTaskFormSubmit: () => void;
} & TaskFormFieldProps;

const TaskDetails: React.FC<TaskFormProps> = ({
  // type,
  title,
  description,
  // tags,
  // creator,
  onTaskFormChange,
  onTaskFormSubmit
}) => {
  return (
    <form>
      <Box>
        <TextField
          label="title"
          name="title"
          onChange={onTaskFormChange}
          value={title}
        />
      </Box>
      <Box>
        <TextField
          label="description"
          name="description"
          onChange={onTaskFormChange}
          value={description}
        />
      </Box>
      <Button onClick={onTaskFormSubmit}>Submit</Button>
    </form>
  );
};

export default TaskDetails;
