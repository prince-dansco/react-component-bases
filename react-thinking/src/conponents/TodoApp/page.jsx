
import React, { useReducer, useState } from "react";

export default function LearnUseReducer() {
  const [name, setName] = useState(""); // State for todo input
  const [todos, dispatch] = useReducer(reducer, []); // UseReducer for todos

  // Define actions
  const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
  };

  // Reducer function
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...state, newTodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, complete: !todo.complete }
            : todo
        );
      case ACTIONS.DELETE_TODO:
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
  }

  // Function to create a new todo item
  function newTodo(name) {
    return { id: Date.now(), name, complete: false };
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    if (name.trim() === "") return; // Avoid adding empty todos
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName(""); // Clear input field
  }

  return (
    <div>
      <h1>Learn useReducer with Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
          name="name"
          placeholder="Enter a todo"
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
            />
            {todo.name}
          </label>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
