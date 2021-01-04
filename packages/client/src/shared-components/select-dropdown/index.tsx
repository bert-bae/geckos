import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const Root = Select;

const useStyles = makeStyles({
  selectContainer: {
    width: '100%'
  }
});

export interface ExtendedSelectProps {
  selectItems: { value: any; label: string }[];
  error?: string;
  placeholder?: string;
  label?: string;
}

export type SelectDropdownProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedSelectProps | 'label'
> &
  ExtendedSelectProps;

const SelectDropdown = React.forwardRef<
  React.ElementRef<typeof Root>,
  SelectDropdownProps
>(function SelectDropdown(props, ref) {
  const { selectItems, label, error, ...materialProps } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.selectContainer} error={!!error}>
      {label && <InputLabel>{label}</InputLabel>}
      <Root ref={ref} label={label} {...materialProps}>
        {selectItems?.map((item, i) => (
          <MenuItem key={`${item.value}-${i}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Root>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
});

export default SelectDropdown;
