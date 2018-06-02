import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TodoView from '../views/todos/TodoView';
import Todo from '../components/Todo';
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
            <Route exact path="/todos" component={TodoView} />
            <Route path="/todos/:todo_id" component={Todo} />
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
