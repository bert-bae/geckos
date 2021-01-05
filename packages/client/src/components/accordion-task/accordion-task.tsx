import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionTaskSummary, {
  AccordionTaskSummaryProps
} from './accordion-task-summary';
import AccordionTaskDetails, {
  ExtendedAccordionDetailsProps
} from './accordion-task-detail';

const Root = Accordion;

export interface ExtendedAccordionProps {
  TaskSummaryProps: AccordionTaskSummaryProps;
  TaskDetailProps: ExtendedAccordionDetailsProps;
}

export type AccordionProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionProps | 'children'
> &
  ExtendedAccordionProps;

const AccordionTask = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionProps
>(function AccordionTask(props, ref) {
  const { TaskSummaryProps, TaskDetailProps, ...materialProps } = props;
  return (
    <Root ref={ref} {...materialProps}>
      <AccordionTaskSummary {...TaskSummaryProps} />
      <AccordionTaskDetails {...TaskDetailProps} />
    </Root>
  );
});

export default AccordionTask;
