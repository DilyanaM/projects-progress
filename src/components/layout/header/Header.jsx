import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const Header = () => (
  <Container fluid className="header-container">
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Projects Progress</Link>
    </nav>
  </Container>
);

export default Header;
