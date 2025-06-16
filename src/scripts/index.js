import "../css/styles.css";
import { addTodoModalCard, taskDetails } from "./dom/todo-generator.js";
import { TodoModal } from "./ui/todo-modal.js";



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

    const todoModal = new TodoModal(modal);
    const addNewTodoButton = document.getElementById("new-todo-button");

    bodyElement.appendChild(modal);

    addNewTodoButton.addEventListener('click', (e) => {
        e.stopPropagation();
        todoModal.showModal();
    });
});

