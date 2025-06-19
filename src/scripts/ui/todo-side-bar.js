import {
  newProject,
  newProjectItem,
  projectItemContent,
  projectTagItemsContainer,
} from '../dom/project-generator';
import TodoProject from '../logic/todo-project';

export default class TodoSideBar {
  constructor() {
    this.projectItems = [];
    this.project = new TodoProject();
    this.sideBarProject = document.getElementById('projects');
  }

  renderNewProjects() {
    this.project.createNewProject('Birthday');
    this.project.createNewTag('Birthday', 'Celebrate');
    this.project.projects.forEach((project) => {
      Object.entries(project).forEach(([projectFolder, projectItemTag]) => {
        const projectEntry = newProject(projectFolder);
        const itemContainer = projectItemContent();

        if (projectItemTag.length > 0) {
          projectItemTag.forEach((item) => {
            const tagItemContainer = projectTagItemsContainer();
            const itemTagID = item.toLowerCase().replace(/\s+/g, '-');
            const projectItemDom = newProjectItem();

            projectItemDom.textContent = item;
            projectItemDom.id = itemTagID;
            projectItemDom.addEventListener('click', (e) =>
              this.renderTagsItems(e)
            );
            tagItemContainer.textContent = item;
            tagItemContainer.setAttribute('data-id', itemTagID);
            itemContainer.appendChild(projectItemDom);
            this.projectItems.push(tagItemContainer);
          });
        }

        projectEntry.appendChild(itemContainer);
        this.sideBarProject.appendChild(projectEntry);
      });
    });
  }

  // Renders project item tasks to main content
  renderTagsItems(e) {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = '';
    const tagContainerToShow = e.target.id;

    this.projectItems.forEach((tagContainer) => {
      if (tagContainer.dataset.id === tagContainerToShow) {
        mainContent.appendChild(tagContainer);
      }
    });
  }
}
