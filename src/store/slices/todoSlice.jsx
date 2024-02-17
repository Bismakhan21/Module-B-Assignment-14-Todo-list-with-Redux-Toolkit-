 import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  
  name: 'todo',
  initialState: {
    todos: [],
  },

  reducers: {
    
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    }, 

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
