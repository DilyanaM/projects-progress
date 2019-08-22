import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

const Header = () => (
  <Container fluid className="header-container">
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <NavLink
        to="/"
        exact
        className="navbar-brand"
      >
        Projects Progress
      </NavLink>
      <NavLink
        to="/projects"
        exact
        className="nav-item ml-auto"
        activeClassName="nav-item__active"
      >
        Projects
      </NavLink>
    </nav>
  </Container>
);

export default Header;
