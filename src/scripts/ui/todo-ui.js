import TodoService from '../logic/todo-service';
import { taskDetails } from '../dom/todo-generator';

export default class TodoUI {
  constructor() {
    this.todoService = new TodoService();
    this.highPriorityContainer = document.getElementById('high-priority');
    this.mediumPriorityContainer = document.getElementById('medium-priority');
    this.lowPriorityContainer = document.getElementById('low-priority');
  }

  generateTodoCardUI() {
    this.clearPriorityContainer();

    this.todoService.todoList.forEach((todo) => {
      const card = taskDetails();
      const checkBox = card.querySelector('.task-check');

      const todoTitle = card.querySelector('.task-title');
      const todoDescription = card.querySelector('.task-description');
      const todoPriority = card.querySelector('.task-priority');
      const todoDueDate = card.querySelector('.task-due-date');

      checkBox.id = todo.id;
      todoTitle.textContent = todo.title;
      todoDescription.textContent = todo.description;
      todoPriority.textContent = todo.priority;
      todoDueDate.textContent = todo.dueDate;

      checkBox.addEventListener('change', (e) =>
        this.todoService.removeTodoList(e)
      );

      switch (todo.priority) {
        case 'high-priority':
          todoPriority.classList.add('high-priority');
          this.highPriorityContainer.appendChild(card);
          break;
        case 'medium-priority':
          todoPriority.classList.add('medium-priority');
          this.mediumPriorityContainer.appendChild(card);
          break;
        case 'low-priority':
          todoPriority.classList.add('low-priority');
          this.lowPriorityContainer.appendChild(card);
          break;
        default:
          todoPriority.classList.add('low-priority');
          this.lowPriorityContainer.appendChild(card);
          break;
      }
    });
  }

  clearPriorityContainer() {
    this.highPriorityContainer.innerHTML = '';
    this.mediumPriorityContainer.innerHTML = '';
    this.lowPriorityContainer.innerHTML = '';
  }
}
