import React from 'react';
import getProjects from '../../services/projects';

export default class Container extends React.Component {
  componentDidMount() {
    this.getAllProjects();
  }

  getAllProjects = async () => {
    try {
      const data = await getProjects();
      return data;
    } catch (error) {
      // console.log('error', error);
      return error;
    }
  }

  render() {
    return (
      <div />
    );
  }
}
