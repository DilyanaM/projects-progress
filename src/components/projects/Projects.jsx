import React from 'react';
import PropTypes from 'prop-types';
import { Col, Alert } from 'reactstrap';
import Loader from '../common/loader/Loader';
import Error from '../common/error/Error';
import Project from '../project/Project';

export default class Projects extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      projectsPerPage: 10,
      endReached: false,
    };
  }

  hasReachedBottom = (event, currentProjects) => {
    if (currentProjects.length === this.props.projects.length) {
      this.setState({
        endReached: true,
      });
    }
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  }

  render() {
    const { projects, isLoading, hasError } = this.props;
    const { currentPage, projectsPerPage, endReached } = this.state;
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
          <div>
            {currentProjects
              .map((project) => (
                <Project key={`${project.id}`} project={project} />
              ))}
            {!!endReached && (
              <Alert color="success" className="text-center">
                Тhere are no more projects to load
              </Alert>
            )}
          </div>
        </div>
      );
    }

    if (isLoading) {
      content = <Loader />;
    }

    if (hasError) {
      content = <Error message="Oops, something went wrong!" />;
    }

    return (
      <Col xs={12} md={{ size: 9, offset: 3 }}>
        {content}
      </Col>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};
