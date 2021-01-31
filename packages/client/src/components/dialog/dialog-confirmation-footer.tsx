import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import Button from 'components/button';
import { HTMLButtonElement } from '@ungap/global-this';

export type DialogConfirmationFooterProps = {
  dismissLabel?: string;
  confirmLabel?: string;
  onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
};

const DialogConfirmationFooter: React.FC<DialogConfirmationFooterProps> = ({
  loading,
  confirmLabel,
  dismissLabel,
  onConfirm,
  onDismiss
}) => {
  return (
    <DialogActions>
      <Button color="primary" disabled={loading} onClick={onDismiss}>
        {dismissLabel || 'Cancel'}
      </Button>
      <Button color="primary" disabled={loading} onClick={onConfirm}>
        {confirmLabel || 'Confirm'}
      </Button>
    </DialogActions>
  );
};

export default DialogConfirmationFooter;
