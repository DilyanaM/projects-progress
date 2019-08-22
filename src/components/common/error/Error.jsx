import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const Error = ({ message }) => (
  <div className="error">
    <Alert color="danger">
      {message}
    </Alert>
  </div>
);

export default Error;

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
