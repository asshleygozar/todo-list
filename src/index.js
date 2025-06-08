import "./styles.css";

const todoLists = [];

class Todo {
    constructor(title, description="", dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class TodoGenerator {
    constructor() {
        this.todolist = [];
    }

    addTodo(todo) {
        this.todolist.push(todo);
    }

    printTodo() {
        console.log(this.todolist);
    }
}

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



const myTodo = new Todo("Cleaning","use broom","2025-06-10", 4);
const todoGenerator = new TodoGenerator();
const todoUpdater = new TodoUpdater(1);

todoLists.push(myTodo);
console.log(todoLists);
todoUpdater.updatePriority(5);
todoUpdater.updateDescription("Use sword");
console.log(todoLists);





