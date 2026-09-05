import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, deleteTodo, updateTodo, toggleComplete }) {
  return (
    <div className="List">
      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
