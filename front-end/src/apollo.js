// src/apollo.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Substitua pela URL do seu servidor GraphQL
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Fornece o Apollo Client para a aplicação
provideApolloClient(apolloClient);

export { apolloClient };
