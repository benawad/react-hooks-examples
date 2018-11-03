import React, { useState } from "react";

import Form from "./Form";
import "./App.css";

// This needs to return the same function every time it is called, but that one
// unchanging function should call the last `fn` that was passed to this.
function useWrapperFunction(fn) {
  // The key here is that state will be the same object every time, so we can
  // just return the `wrapperFunction` that was created on the first render.
  const [ state ] = useState({
    wrapperFunction(...args) { return state.fn.apply(this, args)},
    fn
  })

  // Normally you don't mutate state in React. I think it's worth it here and
  // has little risk because this is all self-contained in this function.
  state.fn = fn

  // Since we just return a property, `state` never leaves this function (except
  // to be stored by Reac
  return state.wrapperFunction
}

export default () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );

  const onSubmit = useWrapperFunction(text => setTodos([{ text, complete: false }, ...todos]))

  return (
    <div className="App">
      <Form
        onSubmit={onSubmit}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
};
