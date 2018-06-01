import React from 'react';
import { Query } from 'react-apollo';
import Todo from './Todo';
import { GET_TODOS } from '../graphql/queries';

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.todos.map(todo => <Todo {...todo} key={todo._id} />);
    }}
  </Query>
);

export default TodoList;
