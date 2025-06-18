export function newProject() {
  // New feature: create new project directory | folder for organization
  const project = document.createElement('div');

  project.classList = 'project-folder';

  return project;
}

export function newProjectItem() {
  const projectItem = document.createElement('p');

  projectItem.classList = 'project-item';

  return projectItem;
}
