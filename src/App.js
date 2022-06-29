import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodos,
  addTodo,
  removeTodo,
  todoPinToggle,
  todoDoneToggle,
} from "./redux/todos";
import { Header, TodoBlock, TodoForm } from "./components";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem("items")) || [];

    dispatch(setTodos(dataFromStorage));
  }, [dispatch]);

  const items = useSelector((state) => state.items);

  const onTodoAddHandler = (item) => {
    dispatch(addTodo(item));
  };

  const onTodoRemoveHandler = (itemIndex) => {
    dispatch(removeTodo(itemIndex));
  };

  const onTodoDoneToggleHandler = (itemIndex) => {
    dispatch(todoDoneToggle(itemIndex));
  };

  const onTodoPinToggleHandler = (itemIndex) => {
    dispatch(todoPinToggle(itemIndex));
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="container">
          <div className="todo__block">
            <ul className="todo__list">
              {items.length === 0 && (
                <p>Todo list is empty, create a new todo!</p>
              )}
              {items &&
                items.map((item, index) => (
                  <TodoBlock
                    key={`${item.name}_${index}`}
                    {...item}
                    onTodoRemove={() => onTodoRemoveHandler(index)}
                    onTodoDone={() => onTodoDoneToggleHandler(index)}
                    onTodoPin={() => onTodoPinToggleHandler(index)}
                  />
                ))}

              <li className="todo__list__item">
                <TodoForm onTodoAdd={onTodoAddHandler} />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
