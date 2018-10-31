import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

export default () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
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
  );
};
