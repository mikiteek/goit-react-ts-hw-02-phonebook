import React from "react";
import styles from "./ContactList.module.css";

interface contactTypes {
  id: string,
  name: string,
  number: string,
}

interface Props {
  contacts: contactTypes[],
  onDeleteContact: any,
}

const ContactList = ({contacts, onDeleteContact}: Props) => (
  <ul>
    {contacts.length > 0 && contacts.map(({name, number, id}) => (
      <li key={id} className={styles["contactItem"]}>
        <p className={styles["contactInfo"]}>{name}: {number}</p>
        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;