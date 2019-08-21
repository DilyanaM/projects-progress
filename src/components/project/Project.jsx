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
    if (document.getElementById(id).classList.contains('project-hidden')) {
      this.setState({
        isOpen: true,
      });
      document.getElementById(id).classList.remove('project-hidden');
      document.getElementById(id).classList.add('project-visible');
    } else {
      this.setState({
        isOpen: false,
      });
      document.getElementById(id).classList.remove('project-visible');
      document.getElementById(id).classList.add('project-hidden');
    }
  }

  render() {
    const { project } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{project.company_name}</CardTitle>
            <CardText>{project.description}</CardText>
            <div
              id={`${project.id}`}
              className="project project-hidden"
            >
              <p>{`Location: ${project.location_city}`}</p>
              <p>{`Publish date: ${formatDate(project.publish_date)}`}</p>
              <p>{`Contact: ${project.contact_name}`}</p>
              <p>{`Title: ${project.title}`}</p>
              <p>{`Comments: ${project.comments}`}</p>
            </div>
            <Button
              className="toggle-button"
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
