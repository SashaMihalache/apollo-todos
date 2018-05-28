import { makeExecutableSchema } from "graphql-tools";
import resolvers from './resolvers';

const typeDefs = `
  type Todo {
    _id: ID!
    title: String!
    isChecked: Boolean
  }

  type Query {
    todos: [Todo!]!
    todo(_id: ID!): Todo
  }

  input TodoInput {
    title: String!
    isChecked: Boolean
  }

  type Mutation {
    createTodo(input: TodoInput): Todo
    updateTodo(_id: ID!, input: TodoInput): Todo
    removeTodo(_id: ID!): Todo
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;