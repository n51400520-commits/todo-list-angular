const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const emptyMsg = document.getElementById('emptyMsg');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Кнопка "Удалить"
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Удалить';
  delBtn.onclick = () => {
    li.remove();
    checkEmpty();
  };

  // Кнопка "Выполнено"
  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✔';
  doneBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  taskInput.value = '';
  checkEmpty();
}

function checkEmpty() {
  emptyMsg.style.display = todoList.children.length === 0 ? 'block' : 'none';
}

checkEmpty();
