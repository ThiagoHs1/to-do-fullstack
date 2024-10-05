// graphql/schema.js
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLBoolean, GraphQLID, GraphQLList } = require('graphql');
const Todo = require('../models/Todo');

// Definir o tipo Todo
const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        completed: { type: GraphQLBoolean }
    }
});

// Root Query para buscar tarefas
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        todos: {
            type: new GraphQLList(TodoType),
            resolve(parent, args) {
                return Todo.findAll();
            }
        },
        todo: {
            type: TodoType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Todo.findByPk(args.id);
            }
        }
    }
});

// Mutations para criar, atualizar e deletar tarefas
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTodo: {
            type: TodoType,
            args: {
              title: { type: GraphQLString }, // Altere de 'text' para 'title'
            },
            resolve(parent, args) {
              const todo = new Todo({
                title: args.title, // Altere de 'text' para 'title'
                completed: false,
              });
              return todo.save();
            },
        },
        
        updateTodo: {
            type: TodoType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                completed: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                return Todo.update(
                    { title: args.title, completed: args.completed },
                    { where: { id: args.id }, returning: true, plain: true }
                ).then(result => result[1]);
            }
        },
        deleteTodo: {
            type: TodoType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Todo.destroy({ where: { id: args.id } });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
