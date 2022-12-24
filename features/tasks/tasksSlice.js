import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload,
          };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
