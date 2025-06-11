import "./styles.css";
import { addTodoDom, taskDetails } from "./todo-generator.js";



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
        this.container = document.getElementById("content");
        this.modal = modal;
        this.listenersAttached = false;
    }

    saveTodoToUi() {

        const taskTitle = document.getElementById("task-title").value;
        const taskDescription = document.getElementById("task-description").value;
        const taskPriority = document.getElementById("task-priority").value;
        const taskDueDate = document.getElementById("task-due-date").value;

        const myTodo = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority);
        this.todoList.push(myTodo);
        this.generateTodoCardUI();
        this.hideModal();
        
    }

    generateTodoCardUI() {
        this.container.innerHTML = "";
    
        for (let task of this.todoList) {
            
            const card = taskDetails();

            const todoTitle = card.querySelector(".task-title");
            const todoDescription = card.querySelector(".task-description");
            const todoPriority = card.querySelector(".task-priority");
            const todoDueDate = card.querySelector(".task-due-date");

            card.id = task.id;
            todoTitle.textContent = task.title;
            todoDescription.textContent = task.description;
            todoPriority.textContent = task.priority;
            todoDueDate.textContent = task.dueDate;
            
            this.container.appendChild(card);
        } 
    }

    clearModalInputs() {
        document.getElementById("task-title").value = "";
        document.getElementById('task-description').value = "";
        document.getElementById('task-due-date').value = "";
    }

    
    showModal() {
        this.modalVisible(false);
        this.clearModalInputs();

        if (!this.listenersAttached) {
            const addTask = document.getElementById("add-task");
            const cancelTask = document.getElementById("cancel");

            cancelTask.addEventListener('click', (e) => {
                e.stopPropagation();
                this.hideModal();
            });
            addTask.addEventListener('click', (e) => {
                e.stopPropagation();
                this.saveTodoToUi();
            });
            this.listenersAttached = true;
        }
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
    const modal = addTodoDom();

    const todoUIGenerator = new TodoUIGenerator(modal);
    const addNewTodoButton = document.getElementById("new-todo-button");

    bodyElement.appendChild(modal);

    addNewTodoButton.addEventListener('click', (e) => {
        e.stopPropagation();
        todoUIGenerator.showModal();
    });
});


// let isSaveEventAttached = false;

// function saveTodoToUI() {
//     if (isSaveEventAttached) return;
//     const addTask = document.getElementById("add-task");
//     const cancelTask = document.getElementById("cancel");

//     addTask.addEventListener('click', function(e) {
//         const taskTitle = document.getElementById("task-title").value;
//         const taskDescription = document.getElementById("task-description").value;
//         const taskPriority = document.getElementById("task-priority").value;
//         const taskDueDate = document.getElementById("task-due-date").value;

//         const myTodo = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority);
//         todoLists.push(myTodo);
//         generateTodoCardUI();
//         hideModal();
//     });

//     cancelTask.addEventListener('click', function(e) {
//         hideModal();
//     });

//     isSaveEventAttached = true;
// }

// function modalVisible(visible) {

//     if (visible) {
//         addModal.id = "modal-invisible";
//     } else {
//         addModal.id = "modal";
//     }
// }

// function hideModal() {
//     modalVisible(true);
// }

// function showModal() {
//     clearModalInputs();
//     modalVisible(false);
// }

// function clearModalInputs() {
//     document.getElementById("task-title").value = "";
//     document.getElementById('task-description').value = "";
//     document.getElementById('task-due-date').value = "";
// }

// function generateTodoCardUI() {
//     container.innerHTML = "";
    
//     for (let task of todoLists) {
        
//             const card = taskDetails();

//             const todoTitle = card.querySelector(".task-title");
//             const todoDescription = card.querySelector(".task-description");
//             const todoPriority = card.querySelector(".task-priority");
//             const todoDueDate = card.querySelector(".task-due-date");

//             card.id = task.id;
//             todoTitle.textContent = task.title;
//             todoDescription.textContent = task.description;
//             todoPriority.textContent = task.priority;
//             todoDueDate.textContent = task.dueDate;
        
//            container.appendChild(card);
//     } 
// }
