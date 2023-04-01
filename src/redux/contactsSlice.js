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
        let newContact = action.payload.name;

        const check = state.filter(
          contact => contact.name.toLowerCase() === newContact.toLowerCase()
        );

        // const a = state.includes(action.payload.name.toLowerCase());

        // console.log(newContact);

        if (check.length) {
          alert(`${newContact} is already in contacts`);
        } else {
          state.push(action.payload);
        }
      },
      prepare(data) {
        return {
          payload: {
            name: data.value.name,
            id: nanoid(),
            number: data.value.number,
            // reset: data.resetForm(),
          },
        };
      },
    },
    // addContact(state, action) {
    //   console.log(action.payload.value);
    //   let newContact = action.payload.value;
    //   newContact.id = nanoid();
    //   state.push(newContact);

    //   action.payload.resetForm();
    // },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload); //return бо ми не мотуємо стан
      // console.log(a);
      // const index = state.findIndex(task => task.id === action.payload);
      // state.splice(index, 1); // при мутації return непотрібний
    },
  },
});

// console.log(tasksSlice);

// console.log(tasksSlice.actions.deleteContact());

export const { addContact, deleteContact } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
