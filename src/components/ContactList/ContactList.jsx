import React from 'react';
import {
  ContactsList,
  ContactsListItem,
  ContactBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/reducerSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <ContactBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactBtn>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
