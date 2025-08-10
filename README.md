# Dynamic To-Do List Application

A simple yet powerful to-do list application built with vanilla JavaScript, HTML, and CSS. This application demonstrates advanced DOM manipulation techniques for adding, displaying, and removing tasks dynamically.

## Features

- **Add Tasks**: Enter tasks via input field or press Enter
- **Remove Tasks**: Click the Remove button to delete individual tasks
- **Dynamic Updates**: Real-time DOM manipulation without page refresh
- **Input Validation**: Prevents empty task submissions
- **Responsive Design**: Works on all device sizes
- **Clean UI**: Modern, user-friendly interface

## File Structure
dynamic-to-do-list-js/
├── index.html    # Main HTML structure

├── styles.css    # CSS styling

├── script.js     # JavaScript functionality

└── README.md     # Documentation


## How to Use

1. **Add a Task**:
   - Type your task in the input field
   - Click "Add Task" button OR press Enter
   - Task appears in the list below

2. **Remove a Task**:
   - Click the red "Remove" button next to any task
   - Task is instantly removed from the list

3. **Input Validation**:
   - Empty tasks trigger an alert message
   - Input field is automatically cleared after adding a task

## Technical Implementation

- **DOM Manipulation**:
  - `createElement()` for dynamic list items
  - `appendChild()` for adding elements
  - `removeChild()` for removing tasks
  - Event delegation for button clicks

- **Event Handling**:
  - `DOMContentLoaded` ensures DOM is ready
  - Click events for button interactions
  - Keyboard events for Enter key submission

- **User Experience**:
  - Auto-focus on input field
  - Smooth transitions and hover effects
  - Clear visual feedback for actions

## Browser Support

Works in all modern browsers supporting ES6+ JavaScript.

## License

MIT License
