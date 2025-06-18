export function newProject(projectName) {
  // New feature: create new project directory | folder for organization
  const projectFolder = document.createElement('div');
  const projectFolderName = document.createElement('p');
  const projectItemContainer = document.createElement('div');
  
  projectFolderName.textContent = projectName;
  projectFolderName.classList = 'project-name';
  projectItemContainer.classList = 'project-item-container';
  projectFolder.classList = 'project-folder';
  projectFolder.appendChild(projectFolderName);
  projectFolder.appendChild(projectItemContainer);

  return projectFolder;
}

export function newProjectItem() {
  const projectItem = document.createElement('p');

  projectItem.classList = 'project-item';

  return projectItem;
}
