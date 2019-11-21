import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to={process.env.PUBLIC_URL + '/'} exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/about'} exact activeClassName="active">
        About
      </NavLink>
      <NavLink to={process.env.PUBLIC_URL + '/contact'} exact activeClassName="active">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
