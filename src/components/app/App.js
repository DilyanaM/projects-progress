import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Header from '../layout/header/Header';
import Main from '../../views/main/Main';
import Projects from '../../views/projects/Projects';

const App = () => (
  <div className="app">
    <Header />
    <Container fluid>
      <Row>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Row>
    </Container>
  </div>
);

export default App;
