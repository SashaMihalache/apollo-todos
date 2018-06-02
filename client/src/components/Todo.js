import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Todo.scss';

class Todo extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  goTo = () => this.context.router.history.push(`/todos/${this.props._id}`);

  render() {
    const { title, isChecked } = this.props;
    return (
      <div className="todo">
        <p className="title">{title}</p>
        <div className="right">
          <input type="checkbox" className="checked" checked={isChecked} disabled />
          <button onClick={this.goTo}>Edit</button>
        </div>
      </div>
    );
  }
}

export default Todo;

Todo.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
