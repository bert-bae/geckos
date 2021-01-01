import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const Root = AccordionDetails;

export interface ExtendedAccordionDetailsProps {
  type: "Task" | "Epic" | "Bug";
  description?: string;
}

export type AccordionDetailsProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionDetailsProps
> &
  ExtendedAccordionDetailsProps;

const useStyles = makeStyles({});

const AccordionTaskDetail = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionDetailsProps
>(function AccordionTaskDetail(props, ref) {
  const { description, type, ...materialProps } = props;
  const classes = useStyles();

  return (
    <Root ref={ref} {...materialProps}>
      <Box>
        Type: {type}
        <hr />
        {description}
      </Box>
    </Root>
  );
});

export default AccordionTaskDetail;
