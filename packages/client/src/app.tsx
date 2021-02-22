import React from 'react';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { client } from 'utils/graphql';
import { ApplicationRouter } from 'utils/router';

const App = () => (
  <ApolloProvider client={client}>
    <CssBaseline />
    <ApplicationRouter />
  </ApolloProvider>
);

export default App;
