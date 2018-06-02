import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import Todo from '../../components/Todo';
import { GET_TODOS } from '../../graphql/queries';
import './TodoList.scss';

const TodoList = () => {
  const renderHeader = () => (
    <div className="header">
      <h1>Todos</h1>
      <Link to="/todos/new">Add Todo</Link>
    </div>
  );

  return (
    <Query query={GET_TODOS}>
      {({ loading, error, data }) => {
        if (loading) return <p className="loading">Loading...</p>;
        if (error) return <p className="error">Error :(</p>;

        return (
          <div className="todo-list">
            {renderHeader()}
            {data.todos.map(todo => <Todo {...todo} key={todo._id} />)}
          </div>
        );
      }}
    </Query>
  );
};

export default TodoList;
