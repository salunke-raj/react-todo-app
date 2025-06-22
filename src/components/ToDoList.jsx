import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, onDelete, onToggle, onEdit, onStartEdit }) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
          onStartEdit={onStartEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
