// 1. DOMContentLoaded wrapper
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList  = document.getElementById('task-list');

    // 2. addTask function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) { alert('Please enter a task!'); return; }

        // Task creation & removal
        const li        = document.createElement('li');
        li.textContent  = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');   // <-- REQUIRED

        removeBtn.onclick = () => taskList.removeChild(li);

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }

    // 3. Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { addTask(); }
    });
});
