import React from 'react';
import TaskDetails, {
  TaskFormProps,
  TaskFormFieldProps
} from 'features/task/task-details';
import {
  DialogHeader,
  DialogContainer,
  DialogConfirmationFooter
} from 'components/dialog';

export type TaskFormDialogProps = {
  open: boolean;
  onTaskFormDialogClose: () => void;
} & TaskFormProps;

// Temp placement of mutation example for use in container components in the future

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

  return (
    <DialogContainer
      fullWidth={true}
      maxWidth="lg"
      open={open}
      header={
        <DialogHeader
          title={`${creator ? 'Create' : 'Edit'} ${type}`}
          onDialogClose={onTaskFormDialogClose}
        />
      }
      footer={
        <DialogConfirmationFooter
          dismissLabel="Cancel"
          confirmLabel={creator ? 'Update' : 'Create'}
          onDismiss={onTaskFormDialogClose}
          onConfirm={onTaskFormSubmit}
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
