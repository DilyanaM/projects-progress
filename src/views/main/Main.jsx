import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Main = () => (
  <div className="d-flex flex-fill justify-content-center align-items-center">
    <Link to="/projects">
      <Button color="success">View projects</Button>
    </Link>
  </div>
);

export default Main;
