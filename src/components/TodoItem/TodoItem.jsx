import React from "react";
import "./TodoItem.css";
import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;

    updateTodo(todo._id, editText);
    setIsEditing(false);
  };

  return (
    <div className="todoCard">
      <div className="taskContent">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id)}
        />

        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
        )}
      </div>

      <div className="actions">
        {isEditing ? (
          <button onClick={handleSave}>
            <i className="fa-solid fa-check"></i>Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <i className="fa-solid fa-pen"></i> Edit
          </button>
        )}

        <button onClick={() => deleteTodo(todo._id)}>
          <i className="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
