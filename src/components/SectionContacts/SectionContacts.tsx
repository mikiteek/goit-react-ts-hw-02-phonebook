import React, {Component} from "react";

interface Props {
  title?: string,
  children: any,
}

class SectionContacts extends Component<Props> {
  public render() {
    const {title, children} = this.props;
    return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )}
}

export default SectionContacts;