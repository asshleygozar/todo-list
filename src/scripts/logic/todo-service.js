import { format } from 'date-fns';
import Todo from './todo';

export default class TodoService {
  constructor() {
    this.todoList = [];
  }

  saveTodoToUi() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskDueDate = document.getElementById('task-due-date').value;
    const formatTaskDueDate = format(taskDueDate, 'MMMM dd, yyyy');

    const myTodo = new Todo(
      taskTitle,
      formatTaskDueDate,
      taskPriority,
      taskDescription,
    );
    this.todoList.push(myTodo);
  }

  removeTodoList(e) {
    const idToRemove = e.target.id;

    if (e.target.checked) {
      this.todoList = this.todoList.filter((todo) => todo.id !== idToRemove);
      const card = e.target.closest('.todo-item');
      if (card) {
        card.classList.add('fade-out');
        setTimeout(() => card.remove(), 2000);
      }
    }
  }
}
