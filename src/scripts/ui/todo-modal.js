import { format } from 'date-fns';
import TodoUI from './todo-ui';

export default class TodoModal {
  constructor(modal) {
    this.todoUI = new TodoUI();
    this.listenersAttached = false;
    this.modal = modal;
  }

  static clearModalInputs() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-due-date').value = '';
  }

  showModal() {
    this.modalVisible(false);
    TodoModal.clearModalInputs();
    this.initializeModalAction();
    TodoModal.initializeTodayDate();
  }

  initializeModalAction() {
    const cancelTask = document.getElementById('cancel');
    const form = document.getElementById('modal');

    if (!this.listenersAttached) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        this.hideModal();
        this.todoUI.todoService.saveTodoToUi();
        this.todoUI.generateTodoCardUI();
      });

      cancelTask.addEventListener('click', (e) => {
        e.stopPropagation();
        this.hideModal();
      });
      this.listenersAttached = true;
    }
  }

  static initializeTodayDate() {
    const taskDueDate = document.getElementById('task-due-date');
    const formattedDate = format(new Date(), 'yyyy-MM-dd');

    taskDueDate.value = formattedDate;
  }

  hideModal() {
    this.modalVisible(true);
  }

  modalVisible(visible) {
    if (visible) {
      this.modal.id = 'modal-invisible';
    } else {
      this.modal.id = 'modal';
    }
  }
}
