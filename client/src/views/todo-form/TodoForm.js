import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { GET_TODO } from '../../graphql/queries';
import './TodoForm.scss';

class TodoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  renderHeader = () => <h1>{this.props.match.params.todoId ? 'Edit' : 'Add'} Form</h1>;

  render() {
    if (this.props.data.loading) {
      return <p className="loading">Loading...</p>;
    }
    if (this.props.data.error) {
      return <p className="error">Error...</p>;
    }

    const { title, isChecked } = this.props.data.todo;

    return (
      <div className="single-todo-form">
        {this.renderHeader()}
        <form className="single-todo" onSubmit={this.handleSubmit}>
          <div className="title-input">
            Title:
            <input type="text" defaultValue={title} />
          </div>
          <div className="is-checked-input">
            Done:
            <input type="checkbox" defaultChecked={isChecked} />
          </div>

          <button>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default graphql(GET_TODO, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.todoId,
    },
  }),
})(TodoForm);

TodoForm.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};