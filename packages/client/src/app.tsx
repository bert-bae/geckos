import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from 'utils/graphql';
import { ApplicationRouter } from 'utils/router';

const App = () => (
  <ApolloProvider client={client}>
    <ApplicationRouter />
  </ApolloProvider>
);

export default App;
