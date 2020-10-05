import React, { useState } from "react";

export default function AddTodo({ onCreateItem }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    event.preventDefault();
    if (value.trim().length > 0) {
      onCreateItem(value);
      setValue("");
    }
  }

  return (
    <form className="AddTodo" onSubmit={handleChange}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Добавить</button>
    </form>
  );
}
