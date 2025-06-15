import "../css/styles.css";
import { addTodoModalCard, taskDetails } from "./dom-generator/todo-generator.js";
import { format } from 'date-fns';



class Todo {
    constructor(title, description="", dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class TodoUIGenerator {
    constructor(modal) {
        this.todoList = [];
        this.highPriorityContainer = document.getElementById("high-priority");
        this.mediumPriorityContainer = document.getElementById("medium-priority");
        this.lowPriorityContainer = document.getElementById("low-priority");
        this.modal = modal;
        this.listenersAttached = false;
    }

    saveTodoToUi() {

        const taskTitle = document.getElementById("task-title").value;
        const taskDescription = document.getElementById("task-description").value;
        const taskPriority = document.getElementById("task-priority").value;
        const taskDueDate = document.getElementById("task-due-date").value;
        const formatTaskDueDate = format(taskDueDate, 'MMMM dd, yyyy');

        const myTodo = new Todo(taskTitle, taskDescription, formatTaskDueDate, taskPriority);
        this.todoList.push(myTodo);
        this.generateTodoCardUI();
        this.hideModal();
        
    }

    generateTodoCardUI() {
        this.clearPriorityContainer();

        for (let task of this.todoList) {
            
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

            checkBox.addEventListener('change', (e) => this.removeTodoList(e));
            
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

    clearModalInputs() {
        document.getElementById("task-title").value = "";
        document.getElementById('task-description').value = "";
        document.getElementById('task-due-date').value = "";
    }

    clearPriorityContainer() {
        this.highPriorityContainer.innerHTML = "";
        this.mediumPriorityContainer.innerHTML = "";
        this.lowPriorityContainer.innerHTML = "";
    }

    
    showModal() {
        this.modalVisible(false);
        this.clearModalInputs();
        this.initializeModalAction();
        this.initializeTodayDate();
    }

    initializeModalAction() {

        const cancelTask = document.getElementById("cancel"); 
        const form = document.getElementById('modal');

        if(!this.listenersAttached) {

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                this.saveTodoToUi();
            } );

            cancelTask.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.hideModal();
                });                
                this.listenersAttached = true;
        } 
    }

    removeTodoList(e) {
        const idToRemove = e.target.id;

        if (e.target.checked) {
            this.todoList = this.todoList.filter(todo => todo.id !== idToRemove);
            const card  = e.target.closest('.todo-item');
            if (card) {
                card.classList.add('fade-out');
                setTimeout(() => card.remove(), 300);
            }
        }
    }

    initializeTodayDate() {
        const taskDueDate = document.getElementById('task-due-date');
        const formattedDate = format(new Date(), "yyyy-MM-dd");

        taskDueDate.value = formattedDate;
    }

    hideModal() {
        this.modalVisible(true);
    }

    modalVisible(visible) {
        if (visible) {
            this.modal.id = "modal-invisible";
        } else {
            this.modal.id = "modal";
        }
    }
}

class TodoUpdater {
    
    constructor(id) {
        this.todoList = new TodoUIGenerator().todoList;
        this.id = id;
    }

    updatePriority(updatedPriority) {
        for (let list of this.todoList) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.priority = updatedPriority;
                }
            }
        }   
    }

    updateTitle(updatedTitle) {
        for (let list of this.todoList) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.title = updatedTitle;
                }
            }
        }
    }

    updateDescription(updatedDescription) {
        for (let list of this.todoList) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.description = updatedDescription;
                }
            }
        }
    }

    updateDate(updatedDate) {
        for (let list of this.todoList) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.dueDate = updatedDate;
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    const bodyElement = document.querySelector("body");
    const modal = addTodoModalCard();

    const todoUIGenerator = new TodoUIGenerator(modal);
    const addNewTodoButton = document.getElementById("new-todo-button");

    bodyElement.appendChild(modal);

    addNewTodoButton.addEventListener('click', (e) => {
        e.stopPropagation();
        todoUIGenerator.showModal();
    });
});

