import React from 'react';
import { Col } from 'reactstrap';
import getProjects from '../../services/projects';

export default class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.getAllProjects();
  }

  getAllProjects = async () => {
    try {
      const data = await getProjects();
      this.setState({
        projects: data.projects,
      });
      return data;
    } catch (error) {
      // console.log('error', error);
      return error;
    }
  }

  render() {
    const { projects } = this.state;
    return (
      <Col xs={{ size: 9, offset: 3 }}>
        {projects
          .map((project) => <div key={`${project.id}`}>{project.id}</div>)}
      </Col>
    );
  }
}
