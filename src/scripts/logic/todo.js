export default class Todo {
  constructor(title, dueDate, priority, description = '') {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
