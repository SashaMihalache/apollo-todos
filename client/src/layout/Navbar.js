import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Isometric Graphql/Apollo app /w React </h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
