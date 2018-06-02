import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Main from './layout/Main';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
