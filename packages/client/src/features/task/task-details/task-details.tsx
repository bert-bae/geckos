import React from 'react';
import { GeckTaskTypes } from 'utils/graphql/types.generated';
import SelectDropdown from 'components/select-dropdown';
import Box from '@material-ui/core/Box';
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
  onTaskFormChange: (
    // https://stackoverflow.com/questions/58675993/typescript-react-select-onchange-handler-type-error
    event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => void;
  onTaskFormSubmit: () => void;
} & TaskFormFieldProps;

const TaskDetails: React.FC<TaskFormProps> = ({
  type,
  title,
  description,
  tags,
  creator,
  onTaskFormChange
}) => {
  const typeList = [
    GeckTaskTypes.Epic,
    GeckTaskTypes.Task,
    GeckTaskTypes.Bug
  ].map((type) => ({
    value: type,
    label: type
  }));

  return (
    <form>
      <SelectDropdown
        label="Type"
        name="type"
        selectItems={typeList}
        value={type}
        onChange={onTaskFormChange}
      />
      <Box margin="10px 0">
        <TextField
          fullWidth={true}
          label="Title"
          name="title"
          onChange={onTaskFormChange}
          value={title}
        />
      </Box>
      <Box margin="10px 0">
        <TextField
          fullWidth={true}
          label="Description"
          name="description"
          onChange={onTaskFormChange}
          value={description}
        />
      </Box>
      <Box margin="10px 0">
        <TextField
          fullWidth={true}
          label="Tags"
          name="tags"
          onChange={onTaskFormChange}
          value={tags?.join(',')}
        />
      </Box>
      <Box margin="10px 0">
        <TextField
          fullWidth={true}
          label="Creator"
          name="creator"
          onChange={onTaskFormChange}
          value={creator}
        />
      </Box>
    </form>
  );
};

export default TaskDetails;
