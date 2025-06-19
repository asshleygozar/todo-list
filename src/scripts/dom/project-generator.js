export function newProject(projectName) {
  // New feature: create new project directory | folder for organization
  const projectFolder = document.createElement('div');
  const projectFolderName = document.createElement('p');

  projectFolderName.textContent = projectName;
  projectFolderName.classList = 'project-name';
  projectFolder.classList = 'project-folder';
  projectFolder.appendChild(projectFolderName);

  return projectFolder;
}

export function newProjectItem() {
  const projectItem = document.createElement('p');

  projectItem.classList = 'project-item';

  return projectItem;
}

export function projectItemContent() {
  const projectItemDiv = document.createElement('div');

  projectItemDiv.classList.add('project-item-container');

  return projectItemDiv;
}

export function projectTagItemsContainer() {
  const projectTagContainer = document.createElement('div');

  projectTagContainer.classList.add('task-tag-container');

  return projectTagContainer;
}
