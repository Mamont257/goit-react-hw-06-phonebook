import React from 'react';
import {
  ContactsList,
  ContactsListItem,
  ContactBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function getVisibleContacts(contacts, filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => (
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
