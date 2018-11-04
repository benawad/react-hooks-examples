import React, { useState, useCallback } from 'react';

import Form from './Form';
import './App.css';

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

  const onSubmit = useCallback(
    text => setTodos(todos => [{ text, complete: false }, ...todos]),
    []
  );
  return (
    <div className="App">
      <Form onSubmit={onSubmit} />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? 'line-through' : ''
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
