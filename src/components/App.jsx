import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm  from './ContactForm/ContactForm.jsx';
import Filter  from './Filter/Filter.jsx';
import ContactList from './ContactList/ContactList.jsx';

export class App extends Component {
  state = {
    contacts: [], 
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("phonebook"));
      if(contacts?.length) { 
      this.setState({contacts})
      }
    }
  componentDidUpdate(prevProps, prevState){
    const {contacts} = this.state;
        if(prevState.contacts.length !== contacts.length) {
           localStorage.setItem("phonebook", JSON.stringify(contacts));
        }
    }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is included in contacts already.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };


  render() {
    const { filter } = this.state;
    return (
      <div className='wrapper'>
       
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2> Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}