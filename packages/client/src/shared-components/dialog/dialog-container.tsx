import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React from 'react';

const Root = Dialog;

export interface ExtendedDialogProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export type DialogProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedDialogProps
> &
  ExtendedDialogProps;

const BaseDialog = React.forwardRef<React.ElementRef<typeof Root>, DialogProps>(
  function BaseDialog(props, ref) {
    const { header, footer, ...materialProps } = props;

    return (
      <Root ref={ref} {...materialProps}>
        {header}
        <DialogContent>{materialProps.children}</DialogContent>
        {footer}
      </Root>
    );
  }
);

export default BaseDialog;
