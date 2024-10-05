const { GraphQLObjectType, GraphQLSchema } = require('graphql');

// Placeholder para o Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Defina os campos aqui mais tarde
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
