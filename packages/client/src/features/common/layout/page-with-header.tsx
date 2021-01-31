import React from 'react';
import Box from '@material-ui/core/Box';
import AppHeader, { AppHeaderProps } from 'features/common/app-header';

type PageWithHeaderProps = AppHeaderProps & {
  children: React.ReactNode;
};

const PageWithHeader: React.FC<PageWithHeaderProps> = (props) => {
  const { children, ...appHeaderProps } = props;

  return (
    <Box>
      <AppHeader {...appHeaderProps} />
      <Box m={4}>{children}</Box>
    </Box>
  );
};

export default PageWithHeader;
