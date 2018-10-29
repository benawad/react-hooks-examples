import React, { useState } from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default React.memo(({ dispatch }) => {
  const { resetValue, ...text } = useInputValue("");

  console.log("<Form /> is rendering...");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ text: text.value, type: "ADD_TODO" });
        resetValue();
      }}
    >
      <input {...text} />
    </form>
  );
});
