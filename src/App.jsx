import React, { Component } from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter/Filter';
import contacts from './Components/data/contacts.json';
import s from './App.module.css';
import shortid from 'shortid';

class App extends Component {
  // --------------constructor----------------------
  state = {
    contacts,
    filter: '',
  };

  // -----metods-----------------------

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // -----render-----------------------

  render() {
    const { contacts } = this.state;
    console.log(this.state);
    return (
      <>
        <h1 className={s.h1}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contactList={contacts} />
        <h2 className={`${s.h1} ${s.h2}`}>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ContactList
          list={this.getFilteredContacts()}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
