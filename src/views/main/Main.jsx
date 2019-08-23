import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const image = require('../../assets/images/code.jpg');

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      windowWidth: 0,
    };
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  render() {
    const { windowWidth } = this.state;
    return (
      <Container
        fluid
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        className="main-container"
      >
        <Jumbotron className="bg-dark">
          <h1 className="display-3 main-title text-center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Progress' Projects
          </h1>
          <Link to="/projects">
            <Button
              color="success text-uppercase"
              size={windowWidth > 1199 ? 'lg' : ''}
            >
              View more
            </Button>
          </Link>
        </Jumbotron>
      </Container>
    );
  }
}
