import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export function App() {
  const [contacts, setContacts] = useState(() => { // лінива ініціалізація стану, запускається тільки 1 раз
    return JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  });
  const [filter, setFilter] = useState('');
  const [filterContact, setFilterContact] = useState([]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts)) //записує в LocalStorage нові контакти
  }, [contacts])

  useEffect(() => {
    setFilterContact(contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())))
  }, [filter, contacts])

  function handleDelete(ContactId) {
    setContacts(contacts.filter(({ id }) => id !== ContactId))
  }

  function handleSubmit(value, { resetForm }) {
    let newContact = value;

    const check = contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check.length) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();
      setContacts(prevState => ([...prevState, newContact]));
    }
    resetForm();
  };

  function handleFilter(e) {
    setFilter(e.target.value)
  };

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onLeaveContact={handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={handleFilter} />
        <ContactList
          contacts={filterContact}
          onDelete={handleDelete}
        />
      </div>
    )
}














// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: ''
//   }

//   componentDidMount() { //  1 раз при монтуванні
//     // console.log("App DidMount");
//     const saveContact = localStorage.getItem('contacts'); //читає з LocalStorage
//     const parseContact = JSON.parse(saveContact)// парсить

//     if (parseContact) { //перевіряє чи LocalStorage є дані
//       this.setState({ contacts: parseContact}) // змінює значення state з LocalStorage
//     }
    
//   }

//   componentDidUpdate(prevProps, prevState) { // завжди при оновленні
//     console.log("App DidUpdata");
//     if (this.state.contacts !== prevState.contacts) { // перевіряє чи дані змінились 
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts)) //записує в LocalStorage нові контакти
//     }
//   }

//   handleSubmit = (value, { resetForm }) => {
//     let newContact = value;

//     const check = this.state.contacts.filter(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     );

//     if (check.length) {
//       alert(`${newContact.name} is already in contacts`);
//     } else {
//       newContact.id = nanoid();
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//       }))
//     }
//     resetForm();
//   };


//   handleFilter = e => {
//     this.setState({ filter: e.target.value });
//   };


//   handleDelete = ContactId => {
//     this.setState({
//       contacts: this.state.contacts.filter(({ id }) => id !== ContactId),
//     });
//   };

  
//   getFilterName = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const contacts = this.getFilterName();
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onLeaveContact={this.handleSubmit} />
//         <h2>Contacts</h2>
//         <Filter onFilter={this.handleFilter} />
//         <ContactList
//           contacts={contacts}
//           onDelete={this.handleDelete}
//         />
//       </div>
//     )
//   }
// }


