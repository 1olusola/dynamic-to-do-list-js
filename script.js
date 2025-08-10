// Setup event listener for page load as required
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Select DOM elements as required
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Create the addTask function as required
    function addTask() {
        // Retrieve and trim the task value
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Task creation and removal logic
        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Assign onclick event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append the remove button to the li element
        listItem.appendChild(removeButton);
        
        // Append the li to the task list
        taskList.appendChild(listItem);
        
        // Clear the task input field
        taskInput.value = '';
    }
    
    // Attach event listeners as required
    
    // Add event listener to the button
    addButton.addEventListener('click', addTask);
    
    // Add event listener for Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    taskInput.focus();
});
