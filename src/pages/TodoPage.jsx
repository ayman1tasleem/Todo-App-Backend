import React from "react";
import "./TodoPage.css";
import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  const addTodo = async (text) => {
    try{
      const response = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify({
          "text": text
      })
    })
      const data = await response.json()
      setTodos([...todos, data])
    } catch (error) {
      console.log(error.message)
    }
  };

  const deleteTodo = async (id) => {
    try{
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE"
      })
      setTodos(todos.filter((todo) => todo._id !== id))
    } catch (error) {
      console.log(error.message)
    }
  };

  const updateTodo = async (id, newText) => {
    try{
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "text": newText
      })
    })
      const data = await response.json()
      setTodos(
      todos.map((todo) => (todo._id === id ? data : todo))
      );
    } catch (error) {
      console.log(error.message)
    }
  };

  const toggleComplete = async (id) => {
    try{
      const todo = todos.find((todo) => todo._id === id)
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "completed": !todo.completed
        }) 
      })
        setTodos(
        todos.map((todo) => (
        todo._id === id ? { ...todo, completed: !todo.completed } : todo))
    );
    } catch (error) {
      console.log(error.message)
    }
  };

      useEffect(() => {
      const getTodos = async() => {
        try{
        const response = await fetch("http://localhost:3000/api/todos")
        const data = await response.json()
        setTodos(data)
      } catch (error) {
        console.log(error.message)
      }
      }

      getTodos();
    }, [])

  return (
    <div className="todoContainer">
      <h1>My Tasks</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default TodoPage;
