import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    // eslint-disable-next-line no-unused-expressions
    <div className="text-center">
    <nav className="navbar navbar-default">
      <NavLink to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="library" activeClassName="active">Library</NavLink>
    </nav>
  </div>
);

export default Header;