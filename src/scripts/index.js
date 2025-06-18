import '../css/styles.css';
import { addTodoModalCard } from './dom/todo-generator';
import TodoModal from './ui/todo-modal';
import TodoSideBar from './ui/todo-side-bar';

document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.querySelector('body');
  const modal = addTodoModalCard();

  const todoModal = new TodoModal(modal);
  const sideBar = new TodoSideBar();
  const addNewTodoButton = document.getElementById('new-todo-button');

  bodyElement.appendChild(modal);
  sideBar.renderNewProjects();

  addNewTodoButton.addEventListener('click', (e) => {
    e.stopPropagation();
    todoModal.showModal();
  });
});
