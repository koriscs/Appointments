import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const titleChange = ({target}) => {
    setTitle(target.value);
  }
  const dateChange = ({target}) => {
    setDate(target.value);
  }
  const timeChange = ({target}) => {
    setTime(target.value);
  }
  const contactChange = ({target}) => {
    setContact(target.value);
  }

  return (
    <form onSubmit={handleSubmit} >
      <input onChange={titleChange} value={title} type='text' placeholder="Title" name="title" />
      <input onChange={dateChange} value={date} type='date' placeholder="Date" name="date" min={getTodayString()} />
      <input onChange={timeChange} value={time} type='time' placeholder="Time" name="time" />
       <ContactPicker contacts={contacts} onChange={contactChange} />
      <input type="submit" />
    </form>
  );
};
