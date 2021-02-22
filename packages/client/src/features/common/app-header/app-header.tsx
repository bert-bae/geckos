import React from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export type AppHeaderProps = AppBarProps;

const AppHeader = React.forwardRef<
  React.ElementRef<typeof AppBar>,
  AppHeaderProps
>((props, ref) => {
  return (
    <AppBar ref={ref} position="static" {...props}>
      <Box p={1}>
        <Typography variant="h6">Geckos</Typography>
      </Box>
    </AppBar>
  );
});

export default AppHeader;
