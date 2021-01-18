import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Root = AccordionSummary;

export interface ExtendedAccordionSummaryProps {
  title: string;
  link?: string;
  SummaryIcon?: React.ReactNode;
  onLinkClick?: () => void;
}

export type AccordionSummaryProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionSummaryProps | 'expandIcon'
> &
  ExtendedAccordionSummaryProps;

const useStyles = makeStyles({
  summaryIcon: {
    marginRight: '5px'
  },
  summaryLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      fontWeight: '550'
    },
    color: 'black'
  }
});

const AccordionLinkSummary = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionSummaryProps
>(function AccordionTaskSummary(props, ref) {
  const { title, link, SummaryIcon, onLinkClick, ...materialProps } = props;
  const classes = useStyles();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick();
    }
  };

  return (
    <Root ref={ref} expandIcon={<ExpandMoreIcon />} {...materialProps}>
      <Box display="flex" alignItems="center">
        {SummaryIcon && (
          <Box
            display="flex"
            alignItems="center"
            className={classes.summaryIcon}
          >
            {SummaryIcon}
          </Box>
        )}
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

export default AccordionLinkSummary;
