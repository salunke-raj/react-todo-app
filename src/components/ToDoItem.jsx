import React, { useState } from 'react';

function ToDoItem({ task, onDelete, onToggle, onEdit, onStartEdit }) {
  const [editedText, setEditedText] = useState(task.text);

  return (
    <li className="flex items-center justify-between bg-black p-2 rounded text-white">
      {task.editing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 mr-2 p-1 border rounded"
          />
          <button
            onClick={() => onEdit(task.id, editedText)}
            className="bg-green-500 text-white px-2 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(task.id)}
            className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
          >
            {task.text}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onStartEdit(task.id)}
              className="p-2 bg-green-400 rounded cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="p-2 bg-red-400 rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
