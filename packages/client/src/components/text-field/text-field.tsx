import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

const Root = MuiTextField;

export type TextFieldProps = React.ComponentProps<typeof Root>;

const ForwardedTextField = React.forwardRef<
  React.ElementRef<typeof Root>,
  TextFieldProps
>(function TextField(props, ref) {
  return (
    <Root
      {...props}
      ref={ref}
      InputLabelProps={{ ...props.InputLabelProps, shrink: true }}
    />
  );
});

export default ForwardedTextField;
