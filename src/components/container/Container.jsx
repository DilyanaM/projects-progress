import React from 'react';
import {
  Col, Card, CardBody, CardTitle, CardText, Button,
} from 'reactstrap';
import getProjects from '../../services/projects';
import formatDate from '../../utils/formatDate';

export default class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      currentPage: 1,
      projectsPerPage: 10,
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

  toggleProject = (id) => {
    if (document.getElementById(id).classList.contains('d-none')) {
      document.getElementById(id).classList.remove('d-none');
      document.getElementById(id).classList.add('d-block');
    } else {
      document.getElementById(id).classList.remove('d-block');
      document.getElementById(id).classList.add('d-none');
    }
  }

  hasReachedBottom = (event, currentProjects) => {
    if (currentProjects.length === this.state.projects.length) return;
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  }

  render() {
    const { projects, currentPage, projectsPerPage } = this.state;
    const firstIndex = 0;
    const lastIndex = projectsPerPage * currentPage;
    const currentProjects = projects.slice(firstIndex, lastIndex);

    return (
      <Col xs={{ size: 9, offset: 3 }}>
        <div
          className="projects-container"
          onScroll={(event) => this.hasReachedBottom(event, currentProjects)}
        >
          {currentProjects
            .map((project) => (
              <div key={`${project.id}`}>
                <Card>
                  <CardBody>
                    <CardTitle>{project.company_name}</CardTitle>
                    <CardText>{project.description}</CardText>
                    <div
                      id={`${project.id}`}
                      className="d-none"
                    >
                      <p>{project.location_city}</p>
                      <p>{formatDate(project.publish_date)}</p>
                      <p>{project.contact_name}</p>
                      <p>{project.title}</p>
                    </div>
                    <Button
                      onClick={() => this.toggleProject(project.id)}
                    >
                      {project.id}
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      </Col>
    );
  }
}
