import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Main = () => (
  // eslint-disable-next-line max-len
  <Container className="d-flex flex-fill flex-column main-container justify-content-center align-items-center">
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <h1 className="display-3 main-title">Progress' Projects</h1>
    <Link to="/projects">
      <Button color="success text-uppercase" size="lg">View more</Button>
    </Link>
  </Container>
);

export default Main;
