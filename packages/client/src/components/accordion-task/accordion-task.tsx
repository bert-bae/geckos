import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionTaskSummary, {
  ExtendedAccordionSummaryProps,
} from "./accordion-task-summary";

const Root = Accordion;

export interface ExtendedAccordionProps {
  TaskSummaryProps: ExtendedAccordionSummaryProps;
}

export type AccordionProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionProps | "children"
> &
  ExtendedAccordionProps;

const AccordionTask = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionProps
>(function AccordionTask(props, ref) {
  const { TaskSummaryProps, ...materialProps } = props;
  return (
    <Root ref={ref} {...materialProps}>
      <AccordionTaskSummary {...TaskSummaryProps} />
    </Root>
  );
});

export default AccordionTask;
