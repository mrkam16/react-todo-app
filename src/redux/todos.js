import { createSlice } from "@reduxjs/toolkit";

const changeOrder = (arr, ind) => {
  let items = [...arr];
  let item = { ...items[ind] };
  item.isPined = !item.isPined;
  items[ind] = item;

  if (items[ind].isPined === false) {
    return [
      ...items.filter((_item, index) => _item.isPined === true),
      items[ind],
      ...items.filter((_item, index) => _item.isPined === false && index > ind),
    ];
  }

  return [items[ind], ...items.filter((item, index) => index !== ind)];
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    setTodos: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },

    addTodo: (state, action) => {
      return {
        items: [...state.items, action.payload],
      };
    },

    removeTodo: (state, action) => {
      return {
        items: state.items.filter((item, index) => index !== action.payload),
      };
    },

    todoPinToggle: (state, action) =>
      void (state.items = changeOrder(state.items, action.payload)),

    todoDoneToggle: (state, action) =>
      void (state.items[action.payload].isDone =
        !state.items[action.payload].isDone),
  },
});

const { actions, reducer } = todosSlice;
const { setTodos, addTodo, removeTodo, todoPinToggle, todoDoneToggle } =
  actions;

export { setTodos, addTodo, removeTodo, todoPinToggle, todoDoneToggle };

export default reducer;
