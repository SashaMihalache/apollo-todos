import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const PORT = 3000;
const app = express();

mongoose.connect(
  'mongodb://localhost/todographql',
  err => {
    if (err) throw err;
    console.log('Connected to mongodb');
  }
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
