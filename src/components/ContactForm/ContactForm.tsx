import React, {Component} from "react";
import styles from "./ContactForm.module.css";

interface stateTypes {
  name: string,
  number: string,
}
interface propTypes {
  onSubmit: any,
}

class ContactForm extends Component<propTypes, stateTypes> {
  state = {
    name: "",
    number: "",
  }

  private handleSubmit = (event: any): void => {
    event.preventDefault();
    const {name, number} = this.state;
    const {onSubmit} = this.props;
    onSubmit({name, number})
  };

  private handleChange = (event: any): void => {
    const {name, value} = event.target;
    this.setState({[name]: value} as any);
  };

  public render() {
    const inputStyles = [styles["form-element"], styles["form-input"]];
    return (
      <section className={styles["section-contacts"]}>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit} className={styles["form-contacts"]}>
          <label htmlFor="name" className={styles["form-element"]}>Name</label>
          <input type="text" name="name" onChange={this.handleChange} className={inputStyles.join(" ")}/>
          <label htmlFor="number" className={styles["form-element"]}>Number</label>
          <input type="text" name="number" onChange={this.handleChange} className={inputStyles.join(" ")}/>
          <br/>
          <button type="submit">Add contact</button>
        </form>
      </section>
    )
  }
}

export default ContactForm;
