import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const [contactsData, setContactsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);

  const addContact = (name, phone, email) => {

    setContactsData(prev => [...prev, {name: name,
                                       phone: phone,
                                       email: email} ]);
  }
  const addAppointment = (title, contact, date, time) => {
    setAppointmentsData(prev => [...prev, {title: title,
                                           contact: contact,
                                           date: date,
                                           time: time} ]);
  }
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage addContact={addContact} contactsData={contactsData} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage addAppointment={addAppointment} appointmentsData={appointmentsData} contactsData={contactsData} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
