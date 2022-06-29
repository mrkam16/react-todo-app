import { useState } from "react";
import Button from "../UI/Button";

function TodoForm({ onTodoAdd }) {
  const [todoText, setTodoText] = useState("");

  const textChangeHandler = (e) => {
    setTodoText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!todoText) return;

    const newItem = {
      name: todoText,
      isDone: false,
      isPined: false,
    };

    onTodoAdd(newItem);

    setTodoText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add todo"
        value={todoText}
        onChange={textChangeHandler}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;
