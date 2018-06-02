import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TodoList from '../views/todo-list/TodoList';
import TodoForm from '../views/todo-form/TodoForm';
import TodoFormAdd from '../views/todo-form/TodoFormAdd';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Home from '../components/Home';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <div className="container">
          <SideBar />

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/todos" component={TodoList} />
            <Route exact path="/todos/view/:todoId" component={TodoForm} />
            <Route exact path="/todos/new" component={TodoFormAdd} />
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
