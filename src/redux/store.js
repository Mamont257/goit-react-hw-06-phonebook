import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './reducerSlice';

// console.log(tasksReducer);

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    // filter: '',
  },
});
