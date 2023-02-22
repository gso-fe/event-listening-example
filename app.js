const addTask = document.querySelector('.add');
const taskList = document.querySelector('.tasks');
const deleteTask = document.querySelector('ul');

const generateListTemplate = newTask => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${newTask}</span>
      <i class="far fa-trash-alt deleteTask"></i>
    </li>`;
  taskList.innerHTML += html;
};

addTask.addEventListener('submit', e => {
  e.preventDefault();
  const newTask = addTask.add.value.trim();
  generateListTemplate(newTask);
});

deleteTask.addEventListener('click', e => {
  console.log(e);
  if(e.target.classList.contains('deleteTask')) {
    e.target.parentElement.remove();
  }
});
