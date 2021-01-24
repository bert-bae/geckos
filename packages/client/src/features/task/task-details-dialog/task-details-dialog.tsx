import React from 'react';
import TaskDetails, {
  TaskFormProps,
  TaskFormFieldProps
} from 'features/task/task-details';
import { DialogHeader, DialogContainer } from 'components/dialog';

export type TaskFormDialogProps = {
  open: boolean;
  onTaskFormDialogClose: () => void;
} & TaskFormProps;

const TaskDetailsDialog: React.FC<TaskFormDialogProps> = ({
  open,
  creator,
  description,
  title,
  tags,
  type,
  onTaskFormChange,
  onTaskFormSubmit,
  onTaskFormDialogClose
}) => {
  const formFields: TaskFormFieldProps = {
    creator,
    description,
    title,
    tags,
    type
  };

  // const [createTask, { data }] = useCreateTaskMutation();

  // const handleFormSubmit = () => {
  //   createTask({ variables: formState });
  // };

  // const [formState, setFormState] = React.useState<TaskFormFieldProps>({
  //   title,
  //   description,
  //   tags,
  //   type,
  //   creator
  // });

  // const handleTaskFormChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  //   setFormState((prevFormState) => ({
  //     ...prevFormState,
  //     [event.target.name]: event.target.value
  //   }));

  return (
    <DialogContainer
      open={open}
      header={
        <DialogHeader
          title={`${title ? 'Create' : 'Edit'} ${type}`}
          onDialogClose={onTaskFormDialogClose}
        />
      }
    >
      <TaskDetails
        {...formFields}
        onTaskFormChange={onTaskFormChange}
        onTaskFormSubmit={onTaskFormSubmit}
      />
    </DialogContainer>
  );
};

export default TaskDetailsDialog;