import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

const Todo = ({ title, isChecked }) => (
  <div className="todo">
    <p className="title">{title}</p>
    <input type="checkbox" className="checked" checked={isChecked} disabled />
  </div>
);

export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
