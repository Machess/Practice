//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners 
loadEventListeners();

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //add text node
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li)
    //clear input
    taskInput.value = '';
    e.preventDefault();
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

//clear task
function clearTasks(){
    // taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            text.style.display ='block';            
        } else {
            text.style.display ='none';
        }
    });
}

