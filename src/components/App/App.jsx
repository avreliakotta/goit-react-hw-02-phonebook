import React, { Component } from "react";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import { ContactList } from "components/ContactsList/ContactsList";
import css from "./App.module.css";
import { nanoid } from 'nanoid'

export class App extends Component{
  state = {
  contacts:[],
  name: "",
  filter: ''
  }
  addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    const isExist=this.state.contacts.find(el=>el.name===contact.name)
    if (isExist) {
    alert(`${name} is already in contacts.`);
    return
  }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
    
  }
  deleteContact = id => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id !==id)
    }))
  }
 
filterContacts = (filter) => {
  if (filter.trim() === "") {

    this.setState({ filter: "" });
  } else {
    this.setState({ filter });
  }
};



    
  
  render() {
 const { filter, contacts } = this.state;
  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

    return (
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <Form onSubmit={this.addContacts}/>
   
        
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />

          <ContactList contacts={filteredContacts}  onDelete={this.deleteContact}  />
        
      </div>
    )
  }
}