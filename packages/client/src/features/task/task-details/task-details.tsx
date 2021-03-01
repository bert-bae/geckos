import React from 'react';
import { GeckTaskTypes } from 'utils/graphql/types.generated';
import SelectDropdown from 'components/select-dropdown';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import TextField from '../../../components/text-field';

export type TaskFormFieldProps = {
  type?: GeckTaskTypes;
  title?: string;
  description?: string;
  tags?: string[];
};

export type TaskFormProps = {
  onTaskFormChange: (
    // https://stackoverflow.com/questions/58675993/typescript-react-select-onchange-handler-type-error
    event: React.ChangeEvent<
      | HTMLInputElement
      | React.KeyboardEvent<HTMLInputElement>
      | { value: unknown }
    >
  ) => void;
  onTaskFormSubmit: () => void;
} & TaskFormFieldProps;

const useStyles = makeStyles((theme) => ({
  typeIcon: {
    marginRight: '8px'
  },
  inputContainer: {
    margin: `16px 0`
  }
}));

const TaskDetails: React.FC<TaskFormProps> = ({
  type,
  title,
  description,
  tags,
  onTaskFormChange
}) => {
  const classes = useStyles();
  const typeList = [
    GeckTaskTypes.Epic,
    GeckTaskTypes.Task,
    GeckTaskTypes.Bug
  ].map((type) => {
    let Icon;

    switch (type) {
      case GeckTaskTypes.Epic:
        Icon = ListAltRoundedIcon;
        break;
      case GeckTaskTypes.Bug:
        Icon = BugReportRoundedIcon;
        break;
      case GeckTaskTypes.Task:
      default:
        Icon = AssignmentRoundedIcon;
        break;
    }
    return {
      value: type,
      label: (
        <Box display="flex">
          <Icon className={classes.typeIcon} fontSize="small" />
          {type}
        </Box>
      )
    };
  });

  return (
    <form>
      <Box className={classes.inputContainer}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              fullWidth={true}
              label="Title"
              name="title"
              onChange={onTaskFormChange}
              value={title}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectDropdown
              variant="outlined"
              label="Type"
              name="type"
              selectItems={typeList}
              value={type}
              onChange={onTaskFormChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.inputContainer}>
        <TextField
          variant="outlined"
          fullWidth={true}
          label="Description"
          name="description"
          onChange={onTaskFormChange}
          value={description}
          multiline={true}
          rows={6}
          rowsMax={6}
        />
      </Box>
      <Box className={classes.inputContainer}>
        <TextField
          variant="outlined"
          fullWidth={true}
          label="Tags"
          name="tags"
          onChange={onTaskFormChange}
          value={tags?.join(',')}
        />
      </Box>
    </form>
  );
};

export default TaskDetails;
