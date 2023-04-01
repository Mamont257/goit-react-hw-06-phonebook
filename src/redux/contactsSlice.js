import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const tasksSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        let { name } = action.payload;

        const check = state.filter(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (check.length) {
          alert(`${name} is already in contacts`);
        } else {
          state.push(action.payload);
        }
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload); //return бо ми не мотуємо стан
      // const index = state.findIndex(task => task.id === action.payload);
      // state.splice(index, 1); // при мутації return непотрібний
    },
  },
});

export const { addContact, deleteContact } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
