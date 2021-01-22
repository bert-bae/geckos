import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import TaskPage from 'pages/task';

const App = () => (
  <ApolloProvider client={client}>
    <TaskPage />
  </ApolloProvider>
);

export default App;
