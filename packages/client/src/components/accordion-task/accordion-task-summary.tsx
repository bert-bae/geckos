import React from 'react';
import { AccordionLinkSummary } from '../../shared-components/accordion';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';

export interface AccordionTaskSummaryProps {
  type: 'Task' | 'Epic' | 'Bug';
  title: string;
  link?: string;
  onLinkClick?: () => void;
}

const taskIcons = {
  Task: <AssignmentRoundedIcon fontSize="small" />,
  Epic: <ListAltRoundedIcon fontSize="small" />,
  Bug: <BugReportRoundedIcon fontSize="small" />
};

const AccordionTaskSummary: React.FC<AccordionTaskSummaryProps> = ({
  title,
  link,
  type,
  onLinkClick
}) => {
  return (
    <AccordionLinkSummary
      title={title}
      link={link}
      SummaryIcon={taskIcons[type]}
      onLinkClick={onLinkClick}
    />
  );
};

export default AccordionTaskSummary;
