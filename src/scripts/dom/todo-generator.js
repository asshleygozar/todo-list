export function addTodoModalCard() {
  // Todo List Modal Add Card
  const modalBox = document.createElement('form');
  const taskNameLabel = document.createElement('label');
  const taskNameInput = document.createElement('input');
  const taskDescriptionLabel = document.createElement('label');
  const taskDescriptionInput = document.createElement('textarea');
  const taskPriorityLabel = document.createElement('label');
  const taskPrioritySelect = document.createElement('select');
  const taskHighPriority = document.createElement('option');
  const taskMediumPriority = document.createElement('option');
  const taskLowPriority = document.createElement('option');
  const taskDueDateLabel = document.createElement('label');
  const taskDueDate = document.createElement('input');
  const createButtonContainer = document.createElement('div');
  const addTodoButton = document.createElement('button');
  const cancelTodoButton = document.createElement('button');

  // Task Title
  taskNameLabel.textContent = 'Title';
  taskNameLabel.htmlFor = 'task-title';
  taskNameLabel.classList.add('modal-label');
  taskNameInput.type = 'text';
  taskNameInput.placeholder = 'Task title';
  taskNameInput.name = 'task-title';
  taskNameInput.id = 'task-title';
  taskNameInput.required = true;
  taskNameLabel.appendChild(taskNameInput);

  // Task Description
  taskDescriptionLabel.textContent = 'Description';
  taskDescriptionLabel.htmlFor = 'task-description';
  taskDescriptionLabel.classList.add('modal-label');
  taskDescriptionInput.name = 'task-description';
  taskDescriptionInput.placeholder = 'Description';
  taskDescriptionInput.id = 'task-description';
  taskDescriptionLabel.appendChild(taskDescriptionInput);

  // Task Priority
  taskPriorityLabel.htmlFor = 'task-priority';
  taskPrioritySelect.name = 'task-priority';
  taskPriorityLabel.textContent = 'Priority';
  taskPriorityLabel.classList.add('modal-label');
  taskPrioritySelect.id = 'task-priority';
  taskHighPriority.textContent = 'High Priority';
  taskHighPriority.value = 'high-priority';
  taskMediumPriority.textContent = 'Medium Priority';
  taskMediumPriority.value = 'medium-priority';
  taskLowPriority.textContent = 'Low Priority';
  taskLowPriority.value = 'low-priority';
  taskPrioritySelect.appendChild(taskHighPriority);
  taskPrioritySelect.appendChild(taskMediumPriority);
  taskPrioritySelect.appendChild(taskLowPriority);
  taskPriorityLabel.appendChild(taskPrioritySelect);

  // Task Due Date
  taskDueDateLabel.textContent = 'Due Date';
  taskDueDateLabel.classList.add('modal-label');
  taskDueDate.type = 'date';
  taskDueDate.name = 'task-due-date';
  taskDueDate.id = 'task-due-date';
  taskDueDateLabel.appendChild(taskDueDate);

  // Create and Cancel Buttons
  addTodoButton.id = 'todo-add-task';
  addTodoButton.type = 'submit';
  cancelTodoButton.id = 'cancel';
  addTodoButton.textContent = 'Save';
  cancelTodoButton.textContent = 'Cancel';
  createButtonContainer.appendChild(addTodoButton);
  createButtonContainer.appendChild(cancelTodoButton);

  modalBox.id = 'modal-invisible';
  modalBox.noValidate = false;
  modalBox.appendChild(taskNameLabel);
  modalBox.appendChild(taskDescriptionLabel);
  modalBox.appendChild(taskPriorityLabel);
  modalBox.appendChild(taskDueDateLabel);
  modalBox.appendChild(createButtonContainer);

  return modalBox;
}

export function taskDetails() {
  // Todo List Card
  const todoBox = document.createElement('div');
  const todoCheckBox = document.createElement('input');
  const todoDetailsContainer = document.createElement('div');
  const todoTitle = document.createElement('p');
  const todoDescription = document.createElement('p');
  const todoDatePriorityContainer = document.createElement('div');
  const todoPriority = document.createElement('p');
  const todoDueDate = document.createElement('p');

  todoCheckBox.classList = 'task-check';
  todoCheckBox.type = 'checkbox';

  todoTitle.classList = 'task-title';
  todoDescription.classList = 'task-description';
  todoDetailsContainer.classList = 'task-title-description-container';

  todoDatePriorityContainer.classList = 'task-date-priority-container';
  todoPriority.classList = 'task-priority';
  todoDueDate.classList = 'task-due-date';

  todoBox.classList = 'todo-item';

  todoDetailsContainer.appendChild(todoTitle);
  todoDetailsContainer.appendChild(todoDescription);

  todoDatePriorityContainer.appendChild(todoPriority);
  todoDatePriorityContainer.appendChild(todoDueDate);

  todoBox.appendChild(todoCheckBox);
  todoBox.appendChild(todoDetailsContainer);
  todoBox.appendChild(todoDatePriorityContainer);

  return todoBox;
}
