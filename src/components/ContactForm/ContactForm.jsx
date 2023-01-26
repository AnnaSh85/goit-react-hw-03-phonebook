import propTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './contactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
   handleSubmit: propTypes.func.isRequired
  }

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });


  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.formLabel}>Name </label>
        <input
          className={styles.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        />
        <label className={styles.formLabel}>Number </label>
        <input
          className={styles.formNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChange}
        />
        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
}
}

export default ContactForm;