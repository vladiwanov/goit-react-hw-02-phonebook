import React, { Component } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    console.log('hgcjcgkuckug', e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    console.log('что передается: ', e.currentTarget.value);
    console.log(this.state);
    console.log('принимается', this.props.contactList);
    this.props.contactList.find(item => item.name === this.state.name)
      ? alert(`${this.state.name} is alrady in contacts`)
      : this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.formSubmit}>
          <label htmlFor={this.nameInputId} className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              id={this.nameInputId}
              placeholder="First Name  Last Name"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={this.numberInputId} className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              id={this.numberInputId}
              placeholder="+000 00 000 00 00"
              onChange={this.handleChange}
            />
          </label>
          <button
            className={s.button}
            type="submit"
            disabled={!this.state.name}
          >
            add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
