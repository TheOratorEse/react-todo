import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // State to manage tasks and filter
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = (title) => {
    setTasks([...tasks, { title, completed: false }]);
  };

  // Mark a task as completed
  const completeTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on selection
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'all':
        return true;
      case 'completed':
        return task.completed;
      case 'incomplete':
        return !task.completed;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={filteredTasks} completeTask={completeTask} deleteTask={deleteTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
    </div>
  );
}

export default App;
