
export function newProject() {
    // New feature: create new project directory | folder for organization
    const newProject = document.createElement('div');

    newProject.classList = 'project-folder';

    return newProject;
}

export function newProjectItem() {
    const newProjectItem = document.createElement('p');

    newProjectItem.classList = 'project-item';

    return newProjectItem;
}