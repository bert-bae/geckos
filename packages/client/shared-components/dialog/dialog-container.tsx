import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React from 'react';

const Root = Dialog

export interface ExtendedDialogProps {
  HeaderComponent?: React.ComponentType
  FooterComponent?: React.ComponentType
}

export type DialogProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedDialogProps
> & ExtendedDialogProps

const BaseDialog = React.forwardRef<
  React.ElementRef<typeof Root>,
  DialogProps
>(function BaseDialog(props, ref) {
  const { 
    HeaderComponent,
    FooterComponent,
    ... materialProps 
  } = props

  return (
    <Root ref={ref} { ... materialProps }>
      {HeaderComponent && <HeaderComponent />}
      <DialogContent>
        {materialProps.children}
      </DialogContent>
      {FooterComponent && <FooterComponent />}
    </Root>
  )
})

export default BaseDialog