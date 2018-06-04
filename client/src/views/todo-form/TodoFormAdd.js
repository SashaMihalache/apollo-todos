import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { CREATE_TODO } from '../../graphql/mutations';
import { GET_TODOS } from '../../graphql/queries';
import './TodoForm.scss';

class TodoForm extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  state = {
    title: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    console.log(this);
    this.props
      .mutate({
        variables: { title },
        refetchQueries: [
          {
            query: GET_TODOS,
          },
        ],
      })
      .then(() => {
        this.context.router.history.push('/todos');
      });
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  renderHeader = () => <h1>Add Form</h1>;

  render() {
    return (
      <div className="single-todo-form">
        {this.renderHeader()}
        <form className="single-todo" onSubmit={this.handleSubmit}>
          <div className="title-input">
            Title:
            <input type="text" defaultValue={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <button>Save Changes</button>
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(CREATE_TODO)(TodoForm);
