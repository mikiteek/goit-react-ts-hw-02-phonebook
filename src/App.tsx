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

class App extends Component<{},stateProps> {
  public state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  private addContact = (contact: contactType): void => {
    const {name, number} = contact;
    if (name === "" || number === "") return;

    const {contacts} = this.state;
    if (contacts.findIndex(contact => contact.name === name) !== -1) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contactNew: contactType = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [...contacts, contactNew],
    }));
  };

  private getVisibleContacts = (): contactType[] => {
    const {filter, contacts} = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
  }
  private changeFilter = (event: any): void => {
    const {value}: {value: string} = event.target;
    this.setState({filter: value});
  }
  private deleteContact = (idContact: string): void => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== idContact),
    }));
  };

  public render() {
    const contacts = this.getVisibleContacts();
    return (
      <div>
        <ContactForm onSubmit={this.addContact}/>
        <SectionContacts title="Contacts">
          <Filter onChangeFilter={this.changeFilter}/>
          <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
        </SectionContacts>
      </div>
    );
  }
}

export default App;