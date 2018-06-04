import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { DELETE_TODO } from '../graphql/mutations';
import './Todo.scss';
import { GET_TODOS } from '../graphql/queries';

class Todo extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  goTo = () => this.context.router.history.push(`/todos/view/${this.props._id}`);

  handleDelete = () => {
    const { _id } = this.props;
    this.props.mutate({
      variables: { id: _id },
      refetchQueries: [
        {
          query: GET_TODOS,
        },
      ],
    });
  };

  render() {
    const { title, isChecked } = this.props;
    return (
      <div className="todo">
        <p className="title">{title}</p>
        <div className="right">
          <input type="checkbox" className="checked" checked={isChecked} disabled />
          <button onClick={this.goTo}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default graphql(DELETE_TODO)(Todo);

Todo.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
