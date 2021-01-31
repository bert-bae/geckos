import React from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export type AppHeaderProps = AppBarProps;

const AppHeader: React.FC<HeaderProps> = () => {
  return (
    <AppBar position="static">
      <Box p={1}>
        <Typography variant="h6">Geckos</Typography>
      </Box>
    </AppBar>
  );
};

export default AppHeader;
