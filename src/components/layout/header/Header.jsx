import React from 'react';
import { Container } from 'reactstrap';

const Header = () => (
  <Container fluid className="header-container">
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Projects Progress</a>
    </nav>
  </Container>
);

export default Header;
