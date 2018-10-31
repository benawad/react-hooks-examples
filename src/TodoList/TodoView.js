import React from "react";
import Todos from "./Todos";
import ResetButton from "./ResetButton";
import Form from "./Form";

export default () => {
  return (
    <div>
      <Form />
      <Todos />
      <ResetButton />
    </div>
  );
};
