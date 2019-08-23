import React from 'react';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Projects from '../../components/projects/Projects';
import getProjects from '../../services/projects';

export default class ProjectsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [],
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

  render() {
    const { projects, isLoading, hasError } = this.state;

    return (
      <>
        <Sidebar />
        <Projects
          projects={projects}
          isLoading={isLoading}
          hasError={hasError}
        />
      </>
    );
  }
}
