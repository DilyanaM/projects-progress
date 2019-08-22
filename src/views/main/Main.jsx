import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Main = () => (
  <div className="main-container justify-content-center align-items-center">
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <h1 className="display-3 main-title">Progress' Projects</h1>
    <Link to="/projects">
      <Button color="success" size="lg">View projects</Button>
    </Link>
  </div>
);

export default Main;
