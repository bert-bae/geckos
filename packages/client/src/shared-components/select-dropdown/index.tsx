import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const Root = Select;

export interface ExtendedSelectProps {
  menuItems: { value: any; label: string }[];
  label?: string;
}

export type SelectDropdownProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedSelectProps
> &
  ExtendedSelectProps;

const SelectDropdown = React.forwardRef<
  React.ElementRef<typeof Root>,
  SelectDropdownProps
>(function SelectDropdown(props, ref) {
  const { menuItems, label, ...materialProps } = props;

  return (
    <FormControl>
      {label && <InputLabel>{label}</InputLabel>}
      <Root ref={ref} label={label} {...materialProps}>
        {menuItems.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Root>
    </FormControl>
  );
});

export default SelectDropdown;
