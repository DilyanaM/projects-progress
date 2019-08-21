import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitle, CardText, Button,
} from 'reactstrap';
import formatDate from '../../utils/formatDate';

export default class Project extends React.Component {

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
    const { project } = this.props;

    return (
      <div>
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
  }).isRequired,
};
