import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

export default () => {
  const { dispatch } = useContext(TodoContext);

  return <button onClick={() => dispatch({ type: "RESET" })}>reset</button>;
};
