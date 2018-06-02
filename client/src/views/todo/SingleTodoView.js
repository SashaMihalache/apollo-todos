import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SingleTodoView.scss';

class SingleTodoView extends Component {
  componentDidMount() {
    console.log('ello', this.props.match);
  }

  render() {
    return (
      <div>
        <h1>Single Todo</h1>
        {this.props.match.params.todoId}
      </div>
    );
  }
}

export default SingleTodoView;

SingleTodoView.propTypes = {
  match: PropTypes.object.isRequired,
};
