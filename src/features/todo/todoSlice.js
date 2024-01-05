import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World !" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => action.payload != todo.id);
    },
    updateTodo: (state, action) => {
      const updatedTodo = {
        id: action.payload.id,
        text: action.payload.text,
      };
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? updatedTodo : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Remark:
// state: it use to get previous state of store
// action: action.payload contains the argument given to the function
