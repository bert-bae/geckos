import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import Container from './Container';

function App() {
  return (
    <ApolloProvider client={client}>
      <Container />
    </ApolloProvider>
  );
}

export default App;
