import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:4000';
const graphQLClient = new GraphQLClient(endpoint);

export async function getTodos() {
  const query = `
    query {
      todos {
        id
        text
        completed
      }
    }
  `;
  return graphQLClient.request(query);
}

export async function createTodo(text) {
  const query = `
    mutation {
      createTodo(text: "${text}") {
        id
        text
        completed
      }
    }
  `;
  return graphQLClient.request(query);
}

// Implemente as funções updateTodo e deleteTodo de forma similar