import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from 'utils/graphql';
import TaskPage from 'pages/task';

const App = () => (
  <ApolloProvider client={client}>
    <TaskPage />
  </ApolloProvider>
);

export default App;