import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Col xs={3} className="position-fixed sidebar">
    <Link to="/">Home</Link>
    <Link to="/projects">View projects</Link>
  </Col>
);

export default Sidebar;
