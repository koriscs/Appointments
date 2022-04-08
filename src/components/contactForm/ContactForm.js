import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

const nameChange = ({target}) => {
  setName(target.value);
}
const phoneChange = ({target}) => {
  setPhone(target.value);
}
const emailChange = ({target}) => {
  setEmail(target.value);
}

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={nameChange} placeholder="Your name" type='text' name='name' value={name}/>
      <input onChange={phoneChange} placeholder="Your phonenumber" type='tel' name='phone' value={phone} pattern="+?[0-9]{10,14}" />
      <input onChange={emailChange} placeholder="Your email adress" type='text' name='email' value ={email}/>
      <input type ="submit"/>
    </form>
  );

};
