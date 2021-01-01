import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";

const Root = AccordionSummary;

export interface ExtendedAccordionSummaryProps {
  type: "Task" | "Epic" | "Bug";
  title: string;
  link?: string;
  onLinkClick?: () => void;
}

export type AccordionSummaryProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionSummaryProps | "expandIcon"
> &
  ExtendedAccordionSummaryProps;

const useStyles = makeStyles({
  summaryHeadContainer: {
    "&:hover": {
      backgroundColor: "lightgrey",
    },
    '&[aria-expanded="true"]': {
      backgroundColor: "lightgrey",
    },
  },
  summaryLink: {
    marginLeft: "5px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      fontWeight: "550",
    },
    color: "black",
  },
});

const taskIcons = {
  Task: <AssignmentRoundedIcon fontSize="small" />,
  Epic: <ListAltRoundedIcon fontSize="small" />,
  Bug: <BugReportRoundedIcon fontSize="small" />,
};

const AccordionTaskSummary = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionSummaryProps
>(function AccordionTaskSummary(props, ref) {
  const { title, link, type, onLinkClick, ...materialProps } = props;
  const classes = useStyles();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick();
    }
  };

  return (
    <Root
      ref={ref}
      className={classes.summaryHeadContainer}
      expandIcon={<ExpandMoreIcon />}
      {...materialProps}
    >
      <Box display="flex" alignItems="center">
        {type ? taskIcons[type] : null}
        <a
          className={classes.summaryLink}
          href={link}
          onClick={handleLinkClick}
        >
          <Typography component="p" variant="subtitle2">
            {title}
          </Typography>
        </a>
      </Box>
    </Root>
  );
});

export default AccordionTaskSummary;
