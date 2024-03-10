import React from 'react';

function TodoItem({ task, completeTask, deleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => completeTask(task.id)} />
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
