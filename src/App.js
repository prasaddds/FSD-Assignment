//App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    const newTask = { id: Math.random(), text };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
