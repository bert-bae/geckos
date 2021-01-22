import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  iconButton: {
    margin: 0,
    padding: 0,
  },
});

export type DialogHeaderProps = {
  title: string;
  children?: React.ReactNode;
  onDialogClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  onDialogClose,
  title,
}) => {
  const classes = useStyles();

  return (
    <>
      <DialogTitle disableTypography>
        <Typography component="h2" variant="h6">
          {title}
        </Typography>
        {onDialogClose && (
          <IconButton
            className={classes.iconButton}
            onClick={onDialogClose}
            edge="end"
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      {children}
    </>
  );
};

export default DialogHeader;
