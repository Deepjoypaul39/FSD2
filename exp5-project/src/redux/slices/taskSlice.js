import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload.title,
        priority: action.payload.priority,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter(t => !t.completed);
    }
  }
});

export const { addTask, toggleTask, deleteTask, clearCompleted } = taskSlice.actions;
export default taskSlice.reducer;