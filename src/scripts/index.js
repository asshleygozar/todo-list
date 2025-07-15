import '../css/styles.css';
import { addTodoModalCard } from './dom/todo-generator';
import TodoModal from './ui/todo-modal';

document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.querySelector('body');
  const modal = addTodoModalCard();

  const todoModal = new TodoModal(modal);
  const addNewTodoButton = document.getElementById('new-todo-button');

  bodyElement.appendChild(modal);

  addNewTodoButton.addEventListener('click', (e) => {
    e.stopPropagation();
    todoModal.showModal();
  });
});
