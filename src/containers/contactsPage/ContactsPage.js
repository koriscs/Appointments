import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({addContact, contactsData}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate && name && phone && email) {

   addContact(name, phone, email);
   setName('');
   setPhone('');
   setEmail('');
   setDuplicate(false);
   } else if (duplicate){
   alert('Please don\'t use the same name, email or phoneNumber!');
   setName('');
   setPhone('');
   setEmail('');
   } else if(!name) {
     alert('Please give a valid name!')
   } else if (!phone) {
     alert('Please give a valid phonenumber!')
   } else if (!email) {
     alert('Please give a valid e-mail adress!')
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 
  useEffect (()=> {

    const nameDuplicate = contactsData.find(contacts => contacts.name === name);
    const phoneDuplicate = contactsData.find(contacts => contacts.phone === phone);
    const emailDuplicate = contactsData.find(contacts => contacts.email === email);

    if(nameDuplicate === undefined && phoneDuplicate === undefined && emailDuplicate === undefined) {
      setDuplicate(false);
    }else {
      setDuplicate(true);
    }
  },[contactsData, name, email, phone]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
         <ContactForm  handleSubmit={handleSubmit}
                       name={name}
                       phone={phone}
                       email={email}
                       setName={setName}
                       setEmail={setEmail}
                       setPhone={setPhone} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactsData={contactsData}/>
      </section>
    </div>
  );
};
