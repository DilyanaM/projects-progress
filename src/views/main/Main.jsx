import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const image = require('../../assets/images/code.jpg');

const Main = () => (
  <Container
    fluid
    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    className="main-container"
  >
    <Jumbotron className="bg-dark">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1 className="display-3 main-title text-center">Progress' Projects</h1>
      <Link to="/projects">
        <Button color="success text-uppercase" size="lg">View more</Button>
      </Link>
    </Jumbotron>
  </Container>
);

export default Main;
