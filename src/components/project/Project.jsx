import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitle, CardText, Button,
} from 'reactstrap';
import formatDate from '../../utils/formatDate';

export default class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  toggleProject = (id) => {
    const element = document.getElementById(id);
    if (element.classList.contains('project-detail__hidden')) {
      this.setState({
        isOpen: true,
      });
      element.classList.remove('project-detail__hidden');
      element.classList.add('project-detail__visible');
    } else {
      this.setState({
        isOpen: false,
      });
      element.classList.remove('project-detail__visible');
      element.classList.add('project-detail__hidden');
    }
  }

  render() {
    const { project } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="project">
        <Card className="bg-light">
          <CardBody>
            <CardTitle>
              <h3>{project.company_name}</h3>
            </CardTitle>
            <CardText className="text-muted">{project.description}</CardText>
            <div
              id={`${project.id}`}
              className="project-detail project-detail__hidden"
            >
              {/* eslint-disable react/jsx-one-expression-per-line */}
              <p className="project-detail-item">
                Location: <span>{project.location_city}</span>
              </p>
              <p className="project-detail-item">
                Publish date: <span>{formatDate(project.publish_date)}</span>
              </p>
              <p className="project-detail-item">
                Contact: <span>{project.contact_name}</span>
              </p>
              <p className="project-detail-item">
                Role: <span>{project.title}</span>
              </p>
              <p className="project-detail-item">
                Comments: <span>{project.comments}</span>
              </p>
              {/* eslint-enable react/jsx-one-expression-per-line */}
            </div>
            <Button
              className="toggle-button"
              color="success"
              onClick={() => this.toggleProject(project.id)}
            >
              {isOpen ? 'Show less' : 'Show more'}
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.shape({
    company_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    location_city: PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired,
    contact_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comments: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
};
