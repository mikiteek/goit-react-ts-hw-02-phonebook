import React, {Component} from 'react';
import {v4 as uuid} from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import SectionContacts from "./components/SectionContacts/SectionContacts";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

interface contactType {
  id: string,
  name: string,
  number: string,
}

interface stateProps {
  contacts: contactType[],
  filter: string,
}

class App extends Component<null, stateProps> {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  addContact = (contact: any): void => {
    const {name, number}: {name: string, number: string} = contact;
    if (name === "" || number === "") return;

    const {contacts}:{contacts: contactType[]} = this.state;
    if (contacts.findIndex(contact => contact.name === name) !== -1) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contactNew: contactType = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({contacts}:{contacts: contactType[]}) => ({
      contacts: [...contacts, contactNew],
    }));
  };

  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
  }
  // changeFilter = event => {
  //   this.setState({filter: event.target.value});
  // }
  deleteContact = (idContact: string) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== idContact),
    }));
  };

  render() {
    const contacts = this.getVisibleContacts();
    return (
      <div>
        <ContactForm onSubmit={this.addContact}/>
        {/*<SectionContacts title="Contacts">*/}
        {/*  <Filter onChangeFilter={this.changeFilter}/>*/}
          <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
        {/*</SectionContacts>*/}

      </div>
    );
  }
}

export default App;