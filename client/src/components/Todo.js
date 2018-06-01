import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ title, isChecked }) => (
  <div>
    <p>{title}</p>
    <p>{isChecked}</p>
  </div>
);

export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
