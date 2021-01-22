import React from 'react';
import Box from '@material-ui/core/Box';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { GeckTaskTypes } from 'types';

const Root = AccordionDetails;

export interface ExtendedAccordionDetailsProps {
  type: GeckTaskTypes;
  description?: string;
}

export type AccordionDetailsProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionDetailsProps
> &
  ExtendedAccordionDetailsProps;

const TaskAccordionDetail = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionDetailsProps
>(function TaskAccordionDetail(props, ref) {
  const { description, type, ...materialProps } = props;

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

export default TaskAccordionDetail;
