export default class TodoProject {
  constructor() {
    this.projects = [{ Happy: ['cake', 'baloons'] }];
  }

  createNewProject(projectName) {
    const newProject = {};
    newProject[projectName] = [];

    this.projects.push(newProject);
  }

  createNewTag(projectName, tag) {
    this.projects.forEach((project) => {
      if (project[projectName]) {
        project[projectName].push(tag);
      }
    });
  }
}
