import { TodoService } from "../logic/todo-service";
import { taskDetails } from "../dom/todo-generator";

export class TodoUI {
    constructor() {
        this.todoService = new TodoService();
        this.highPriorityContainer = document.getElementById("high-priority");
        this.mediumPriorityContainer = document.getElementById("medium-priority");
        this.lowPriorityContainer = document.getElementById("low-priority");
    }

    generateTodoCardUI() {
        this.clearPriorityContainer();

        for (let task of this.todoService.todoList) {
            
            const card = taskDetails();
            const checkBox = card.querySelector('.task-check');

            const todoTitle = card.querySelector(".task-title");
            const todoDescription = card.querySelector(".task-description");
            const todoPriority = card.querySelector(".task-priority");
            const todoDueDate = card.querySelector(".task-due-date");

            checkBox.id = task.id;
            todoTitle.textContent = task.title;
            todoDescription.textContent = task.description;
            todoPriority.textContent = task.priority;
            todoDueDate.textContent = task.dueDate;

            checkBox.addEventListener('change', (e) => this.todoService.removeTodoList(e));
            
            switch(task.priority) {
                case 'high-priority':
                    this.highPriorityContainer.appendChild(card);
                    break;
                case 'medium-priority':
                    this.mediumPriorityContainer.appendChild(card);
                    break;
                case 'low-priority':
                    this.lowPriorityContainer.appendChild(card);
                    break;        
            }
        } 
    }

    clearPriorityContainer() {
        this.highPriorityContainer.innerHTML = "";
        this.mediumPriorityContainer.innerHTML = "";
        this.lowPriorityContainer.innerHTML = "";
    }
}