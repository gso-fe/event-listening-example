const addTask = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');
const deleteTask = document.querySelector('ul');

const generateListEntry = newTask => {
  const html_template = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${newTask}</span>
      <i class="far fa-trash-alt delete-task"></i>
    </li>`;
  taskList.innerHTML += html_template;
};

addTask.addEventListener('submit', e => {
  e.preventDefault();
  const newTask = addTask.add.value.trim();
  generateListEntry(newTask);
});

deleteTask.addEventListener('click', e => {
  // console.log(e);
  if(e.target.classList.contains('delete-task')) {
    e.target.parentElement.remove();
  }
});
