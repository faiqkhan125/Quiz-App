const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        taskList.appendChild(newTask);

        taskInput.value = '';

        newTask.addEventListener('click', () => {
            newTask.classList.toggle('completed');
        });
    }
}


addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        deletetask();
    }
});



taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        edittask();
    }
});




function deletetask(index) {
    arr.splice(index , 1);
    renderTodo()  
}

function edittask(index) {
    const updatedVal = prompt('enter any item');
    arr.splice(index , 1 , updatedVal);
    renderTodoinput()
}


function renderTask() {
    ol.innerHTML += ''
    for (let i=0; i < arr.length; i++) {
        ol.innerHTML +=`` 
        
    }
}