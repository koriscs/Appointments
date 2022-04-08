import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (


    <select placeholder="Choosing contact" name="contacts" onChange={onChange}>
      <option defaultValue="selected" key="nothing"  placeholder="Select your contact"></option>
      {contacts  && contacts.map(contacts => (
        <option key={contacts.name} value={contacts.name}>{contacts.name}</option>
      ))}
    </select>
  );
};
