import express from 'express';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';

import schema from './graphql/schema';

const PORT = 4000;
const app = express();

mongoose.connect(
  'mongodb://localhost/todographql',
  err => {
    if (err) throw err;
    console.log('Connected to mongodb');
  }
);

app.use('*', cors({ origin: 'http://localhost:3000' })); // Restrict the client-origin for security reasons.

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
});
