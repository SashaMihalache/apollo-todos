import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

client
  .query({
    query: gql`
      {
        todos {
          _id
          title
          isChecked
        }
      }
    `,
  })
  .then(result => {
    console.log(result);
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
