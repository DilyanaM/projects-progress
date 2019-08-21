import React from 'react';
import { Col } from 'reactstrap';
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

  render() {
    const { projects, currentPage, projectsPerPage } = this.state;
    const lastIndex = currentPage * projectsPerPage;
    const firstIndex = lastIndex - projectsPerPage;
    const currentProjects = projects.slice(firstIndex, lastIndex);

    return (
      <Col xs={{ size: 9, offset: 3 }} className="projects-container">
        {currentProjects
          .map((project) => (
            <div key={`${project.id}`}>
              <h3>{project.company_name}</h3>
              <button
                type="button"
                onClick={() => this.toggleProject(project.id)}
              >
                {project.id}
              </button>
              <div
                id={`${project.id}`}
                className="d-none"
              >
                <p>{project.description}</p>
                <p>{project.location_city}</p>
                <p>{formatDate(project.publish_date)}</p>
                <p>{project.contact_name}</p>
                <p>{project.title}</p>
              </div>
            </div>
          ))}
      </Col>
    );
  }
}
