import React from "react";
import { TodoContext } from "./TodoContext";

export default class Form extends React.PureComponent {
  static contextType = TodoContext;

  state = {
    text: ""
  };

  render() {
    const { text } = this.state;
    const { dispatch } = this.context;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ text, type: "ADD_TODO" });
          this.setState({ text: "" });
        }}
      >
        <input
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
        />
      </form>
    );
  }
}
