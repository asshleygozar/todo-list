import { format } from 'date-fns';

class Todo {
    constructor(title, description = '', dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class TodoService {
    constructor() {
        this.todoList = [];
    }

    saveTodoToUi() {
        const taskTitle = document.getElementById('task-title').value;
        const taskDescription =
            document.getElementById('task-description').value;
        const taskPriority = document.getElementById('task-priority').value;
        const taskDueDate = document.getElementById('task-due-date').value;
        const formatTaskDueDate = format(taskDueDate, 'MMMM dd, yyyy');

        const myTodo = new Todo(
            taskTitle,
            taskDescription,
            formatTaskDueDate,
            taskPriority
        );
        this.todoList.push(myTodo);
    }

    removeTodoList(e) {
        const idToRemove = e.target.id;

        if (e.target.checked) {
            this.todoList = this.todoList.filter(
                (todo) => todo.id !== idToRemove
            );
            const card = e.target.closest('.todo-item');
            if (card) {
                card.classList.add('fade-out');
                setTimeout(() => card.remove(), 300);
            }
        }
    }
}
