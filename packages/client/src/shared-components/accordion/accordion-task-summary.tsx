import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Root = AccordionSummary;

export interface ExtendedAccordionSummaryProps {
  title: string;
  link?: string;
  taskIcon?: React.ReactNode;
}

export type AccordionSummaryProps = Omit<
  React.ComponentProps<typeof Root>,
  keyof ExtendedAccordionSummaryProps | "expandIcon"
> &
  ExtendedAccordionSummaryProps;

const useStyles = makeStyles({
  summaryLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      fontWeight: "550",
    },
    color: "black",
  },
});

const AccordionContainer = React.forwardRef<
  React.ElementRef<typeof Root>,
  AccordionSummaryProps
>(function AccordionContainer(props, ref) {
  const { title, link, taskIcon, ...materialProps } = props;
  const classes = useStyles();

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <Root ref={ref} expandIcon={<ExpandMoreIcon />} {...materialProps}>
      <Box marginRight="5px">{taskIcon}</Box>
      <a className={classes.summaryLink} href={link} onClick={onLinkClick}>
        <Typography component="p" variant="subtitle2">
          {title}
        </Typography>
      </a>
    </Root>
  );
});

export default AccordionContainer;
