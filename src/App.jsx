import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
      editing: false
    };
    setTasks([...tasks, newItem]);
    setNewTask('');
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  const handleEdit = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText, editing: false } : task
    ));
  };

  const handleStartEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, editing: true } : task
    ));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Header />
      <div className="flex gap-2 my-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 border p-2 rounded"
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </div>
      <ToDoList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggleComplete}
        onEdit={handleEdit}
        onStartEdit={handleStartEdit}
      />
    </div>
  );
}

export default App;
