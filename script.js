// ============================  Local-Storage To-Do List  ============================

document.addEventListener('DOMContentLoaded', () => {
    const addButton  = document.getElementById('add-task-btn');
    const taskInput  = document.getElementById('task-input');
    const taskList   = document.getElementById('task-list');

    /* ---------- 1. Load saved tasks when the page loads ---------- */
    loadTasks();

    /* ---------- 2. Load tasks from Local Storage ---------- */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false => don't re-save
    }

    /* ---------- 3. Add (and optionally save) a task ---------- */
    function addTask(taskText, save = true) {
        const text = typeof taskText === 'string' ? taskText : taskInput.value.trim();

        if (!text) {
            alert('Please enter a task!');
            return;
        }

        /* ---- Build DOM ---- */
        const li          = document.createElement('li');
        li.textContent    = text;

        const removeBtn   = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        /* ---- Remove handler ---- */
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            removeFromStorage(text);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        /* ---- Save to Local Storage ---- */
        if (save) {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        /* ---- Clear input ---- */
        taskInput.value = '';
    }

    /* ---------- 4. Remove a task from Local Storage ---------- */
    function removeFromStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = tasks.filter(t => t !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    /* ---------- 5. Event listeners ---------- */
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    /* ---------- 6. Focus ---------- */
    taskInput.focus();
});
