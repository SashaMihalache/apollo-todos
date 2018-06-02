import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import Navbar from './layout/Navbar';
import SideBar from './layout/SideBar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <SideBar />

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={TodoList} />
          <Route path="/todos/:todo_id" component={Todo} />
        </main>
      </div>
    );
  }
}

export default App;
