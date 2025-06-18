export default class TodoProject {
  constructor() {
    this.projects = [];
  }

  createNewProject(projectName) {
    const newProject = {};
    newProject[projectName] = {};

    this.projects.push(newProject);
  }
}

