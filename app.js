// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click, removeTask');
  // Clear task event
  clearbtn.addEventListener('click', clearTasks);
}

//Add Task
function addTask(e) {
  if(taskInput.value === ''){
    alert('Add a task');
  }

  //Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li 
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item sceondary-content';
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append the link to all 
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

    e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  // taskList.innertHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}