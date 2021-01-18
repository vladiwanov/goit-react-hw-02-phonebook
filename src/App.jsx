import React, { Component } from 'react';
import s from './App.module.css';
import Form from './Components/Form';
import Contacts from './Components/Contacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: ['text-1', 'text-2', 'text-3', 'text-4', 'text-5'],
    // contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: shortid.generate(),
      name,
    };
    console.log('new contact:', contact);
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1 className={s.h1}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        {/* <h2 className={`${s.h1} ${s.h2}`}>Contacts</h2> */}
        <Contacts list={contacts} />
      </>
    );
  }
}

export default App;
