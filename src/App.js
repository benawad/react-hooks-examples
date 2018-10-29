import React, { useReducer } from "react";

import Form from "./Form";
import "./App.css";

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [{ text: action.text, complete: false }, ...todos];
    case "TOGGLE_COMPLETE":
      return todos.map(
        (todo, k) =>
          k === action.i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      );
    case "RESET":
      return [];
    default:
      return todos;
  }
};

export default () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETE", i })}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};
