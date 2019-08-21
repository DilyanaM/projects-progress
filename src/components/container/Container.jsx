import React from 'react';
import { Col } from 'reactstrap';
import Loader from '../common/loader/Loader';
import Error from '../common/error/Error';
import getProjects from '../../services/projects';
import Project from '../project/Project';

export default class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      currentPage: 1,
      projectsPerPage: 10,
      isLoading: false,
      hasError: false,
    };
  }

  componentDidMount() {
    this.getAllProjects();
  }

  getAllProjects = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const data = await getProjects();
      this.setState({
        projects: data.projects,
      });
      return data;
    } catch (e) {
      this.setState({
        hasError: true,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
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
    const {
      projects, currentPage, projectsPerPage, isLoading, hasError,
    } = this.state;
    const firstIndex = 0;
    const lastIndex = projectsPerPage * currentPage;
    const currentProjects = projects.slice(firstIndex, lastIndex);

    let content;
    if (!isLoading && !hasError) {
      content = (
        <div
          className="projects-container"
          onScroll={(event) => (
            this.hasReachedBottom(event, currentProjects)
          )}
        >
          {currentProjects
            .map((project) => (
              <Project key={`${project.id}`} project={project} />
            ))}
        </div>
      );
    }

    if (isLoading) {
      content = <Loader />;
    }

    if (hasError) {
      content = <Error />;
    }

    return (
      <Col xs={{ size: 9, offset: 3 }}>
        {content}
      </Col>
    );
  }
}
