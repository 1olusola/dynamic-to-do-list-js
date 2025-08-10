// 1️⃣  DOMContentLoaded wrapper
document.addEventListener('DOMContentLoaded', () => {

    // 2️⃣  Select elements with exact names
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList  = document.getElementById('task-list');

    // 3️⃣  addTask function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) { alert('Please enter a task!'); return; }

        // 4️⃣  Task creation & removal
        const li          = document.createElement('li');
        li.textContent    = taskText;

        const removeBtn   = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className   = 'remove-btn';   // exact class

        removeBtn.onclick = () => taskList.removeChild(li);

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    // 5️⃣  Event listeners (explicit event.key check)
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { addTask(); }
    });
});
