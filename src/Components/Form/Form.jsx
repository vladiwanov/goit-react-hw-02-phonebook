import React, { Component } from 'react';
import shortid from 'shortid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.name);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '' });
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
