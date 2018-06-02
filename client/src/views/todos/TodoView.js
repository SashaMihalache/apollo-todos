import React from 'react';
import { Query } from 'react-apollo';
import Todo from '../../components/Todo';
import { GET_TODOS } from '../../graphql/queries';
import './TodoView.scss';

const TodoView = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p className="loading">Loading...</p>;
      if (error) return <p className="error">Error :(</p>;

      return data.todos.map(todo => <Todo {...todo} key={todo._id} />);
    }}
  </Query>
);

export default TodoView;
