import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { GET_TODO, GET_TODOS } from '../../graphql/queries';
import { UPDATE_TODO } from '../../graphql/mutations';
import './TodoForm.scss';

class TodoFormEdit extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  state = {
    title: '',
    isChecked: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, isChecked } = this.state;
    const id = this.props.match.params.todoId;
    this.props
      .mutate({
        variables: {
          id,
          title,
          isChecked,
        },
        refetchQueries: [{ query: GET_TODOS }],
      })
      .then(() => {
        this.context.router.history.push('/todos');
      });
  };

  handleChange = e => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  renderHeader = () => <h1>{this.props.match.params.todoId ? 'Edit' : 'Add'} Form</h1>;

  render() {
    if (this.props.data.loading) {
      return <p className="loading">Loading...</p>;
    }
    if (this.props.data.error) {
      return <p className="error">Error...</p>;
    }

    const { title, isChecked } = this.state;

    return (
      <div className="single-todo-form">
        {this.renderHeader()}
        <form className="single-todo" onSubmit={this.handleSubmit}>
          <div className="title-input">
            Title:
            <input name="title" type="text" defaultValue={title} onChange={this.handleChange} />
          </div>
          <div className="is-checked-input">
            Done:
            <input
              name="isChecked"
              type="checkbox"
              defaultChecked={isChecked}
              onChange={this.handleChange}
            />
          </div>

          <button>Save Changes</button>
        </form>
      </div>
    );
  }
}

const getQuery = graphql(GET_TODO, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.todoId,
    },
  }),
});

const updateMutation = graphql(UPDATE_TODO, {});

export default compose(
  getQuery,
  updateMutation
)(TodoFormEdit);

TodoFormEdit.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};
