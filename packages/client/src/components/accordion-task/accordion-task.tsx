import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionTaskSummary, {
  AccordionTaskSummaryProps
} from './accordion-task-summary';
import AccordionTaskDetails, {
  ExtendedAccordionDetailsProps
} from './accordion-task-detail';

const Root = Accordion;

export type AccordionProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionProps | 'children'
> &
  AccordionTaskSummaryProps &
  ExtendedAccordionDetailsProps;

const AccordionTask = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionProps
>(function AccordionTask(props, ref) {
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
      <AccordionTaskSummary
        type={type}
        title={title}
        link={link}
        onLinkClick={onLinkClick}
      />
      <AccordionTaskDetails type={type} description={description} />
    </Root>
  );
});

export default AccordionTask;
