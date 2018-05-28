import { makeExecutableSchema } from "graphql-tools";
import resolvers from './resolvers';

const typeDefs = `
  type Query {
    hello: String!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;