document.getElementById('add').addEventListener('click', function() {
    const text_to_add = prompt("enter your task: ")
    const taskList = document.getElementById('task-list');

    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    
    const taskText = document.createElement('p');
    taskText.textContent = `${text_to_add}`;

    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', function() {
        const newTask = prompt("Edit your task:", taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskContainer);
    });

    
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);

   
    taskList.appendChild(taskContainer);
});
