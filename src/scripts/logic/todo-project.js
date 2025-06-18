class TodoProject {

    constructor() {
        this.projects = [];
    }

    createNewProject(projectName) {
       const newProject = new Object();
       newProject[projectName] = new Object();

       this.projects.push(newProject);
    }
}


