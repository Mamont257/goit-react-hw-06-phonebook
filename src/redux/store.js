import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// console.log(tasksReducer);

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    filter: filterReducer,
  },
});
