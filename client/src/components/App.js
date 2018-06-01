import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './App.css';

const GET_TODOS = gql`
  {
    todos {
      _id
      title
      isChecked
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.todos.map(({ _id, title, isChecked }) => (
            <div key={_id}>
              <p>{title}</p>
              <p>{isChecked}</p>
            </div>
          ));
        }}
      </Query>
    );
  }
}

export default App;
