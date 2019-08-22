import React from 'react';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <Col xs={3} className="position-fixed sidebar bg-light">
    <NavLink
      to="/"
      exact
      className="sidebar-nav-item"
      activeClassName="sidebar-nav-item__active"
    >
      Home
    </NavLink>
    <NavLink
      to="/projects"
      exact
      className="sidebar-nav-item"
      activeClassName="sidebar-nav-item__active"
    >
      Projects
    </NavLink>
  </Col>
);

export default Sidebar;
