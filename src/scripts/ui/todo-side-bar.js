import { newProject } from '../dom/project-generator';
import TodoProject from '../logic/todo-project';

export default class TodoSideBar {
  constructor() {
    this.project = new TodoProject();
    this.sideBarProject = document.getElementById('projects');
  }

  renderNewProjects() {
    // this.project.createNewProject('Birthday');
    this.project.projects.forEach((project) => {
      Object.entries(project).forEach(([projectFolder, projectItem]) => {
        const projectEntry = newProject();

        projectEntry.textContent = projectFolder;

        this.sideBarProject.appendChild(projectEntry);
      })  
    });
  }
}
