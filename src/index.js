import "./styles.css";
import { addTodoDom, taskDetails } from "./todo-generator.js";

const todoLists = [];
const addNewTodoButton = document.getElementById("new-todo-button");
const bodyElement = document.querySelector("body");
const container = document.getElementById("content");
const addModal = addTodoDom();

bodyElement.appendChild(addModal);


class Todo {
    constructor(title, description="", dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// class TodoGenerator {
//     constructor() {
//         this.todolist = [];
//     }

//     addTodo(todo) {
//         this.todolist.push(todo);
//     }

//     printTodo() {
//         console.log(this.todolist);
//     }
// }

class TodoUpdater {
    
    constructor(id) {
        this.todoList = new TodoGenerator().todolist;
        this.id = id;

    }

    updatePriority(updatedPriority) {
        for (let list of todoLists) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.priority = updatedPriority;
                }
            }
        }   
    }

    updateTitle(updatedTitle) {
        for (let list of todoLists) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.title = updatedTitle;
                }
            }
        }
    }

    updateDescription(updatedDescription) {
        for (let list of todoLists) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.description = updatedDescription;
                }
            }
        }
    }

    updateDate(updatedDate) {
        for (let list of todoLists) {
            for (let todo in list) {
                if (list.id == this.id) {
                    list.dueDate = updatedDate;
                }
            }
        }
    }
}



// const myTodo = new Todo("Cleaning","use broom","2025-06-10", 4);
// const todoGenerator = new TodoGenerator();
// const todoUpdater = new TodoUpdater(1);

// todoLists.push(myTodo);
// console.log(todoLists);
// todoUpdater.updatePriority(5);
// todoUpdater.updateDescription("Use sword");
// console.log(todoLists);


addNewTodoButton.addEventListener('click', function(e) {
    const isVisible = isModalVisible();
    modalVisible(isVisible);
    saveTodoToUI();
});

let isSaveEventAttached = false;

function saveTodoToUI() {
    if (isSaveEventAttached) return;
    const addTask = document.getElementById("add-task");
    const cancelTask = document.getElementById("cancel");

    addTask.addEventListener('click', function(e) {
        const isVisible = isModalVisible();
        const taskTitle = document.getElementById("task-title").value;
        const taskDescription = document.getElementById("task-description").value;
        const taskPriority = document.getElementById("task-priority").value;
        const taskDueDate = document.getElementById("task-due-date").value;

        const myTodo = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority);
        todoLists.push(myTodo);
        generateTodoCardUI();
        modalVisible(isVisible);
    });
    
    isSaveEventAttached = true;
}

function modalVisible(visible) {

    if (visible) {
        addModal.id = "modal-invisible";
    } else {
        addModal.id = "modal";
    }
}

function isModalVisible() {

    let checkVisible = addModal.id == "modal" ? true : false;

    return checkVisible;
}


function generateTodoCardUI() {
    container.innerHTML = "";
    
    for (let task of todoLists) {
        
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
        
           container.appendChild(card);
    } 
}
