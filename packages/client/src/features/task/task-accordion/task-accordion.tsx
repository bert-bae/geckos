import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import TaskAccordionSummary, {
  TaskAccordionSummaryProps
} from './task-accordion-summary';
import TaskAccordionDetails, {
  ExtendedAccordionDetailsProps
} from './task-accordion-detail';

const Root = Accordion;

export type AccordionProps = React.ComponentProps<typeof Root> &
  TaskAccordionSummaryProps &
  ExtendedAccordionDetailsProps;

const TaskAccordion = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionProps
>(function TaskAccordion(props, ref) {
  const {
    type,
    title,
    link,
    description,
    onLinkClick,
    ...materialProps
  } = props;
  return (
    <Root ref={ref} {...materialProps}>
      <TaskAccordionSummary
        type={type}
        title={title}
        link={link}
        onLinkClick={onLinkClick}
      />
      <TaskAccordionDetails type={type} description={description} />
    </Root>
  );
});

export default TaskAccordion;
