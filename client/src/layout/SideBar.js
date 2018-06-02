import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <aside className="sidebar">
    <Link className="sidebar-item" to="/">
      Home
    </Link>
    <Link className="sidebar-item" to="/todos">
      Todos
    </Link>
  </aside>
);

export default SideBar;
