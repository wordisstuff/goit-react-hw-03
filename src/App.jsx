// import { useState } from 'react'
import contactsListData from "./data/contactsList.json";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import SearchBox from "./components/SearchBox/SearchBox";

// const contactsListData = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsData =
      JSON.parse(localStorage.getItem("Contacts data")) ?? contactsListData;
    return contactsData;
  });

  const [filter, setFilter] = useState("");
  // const handleAdd = () => { };

  const handleAddContact = (values, actions) => {
    setContacts((prevState) => [
      ...prevState,
      { name: values.userName, number: values.userTel, id: nanoid() },
    ]);
    actions.resetForm();
  };

  useEffect(() => {
    localStorage.setItem("Contacts data", JSON.stringify(contacts));
  }, [contacts]);

  const onDeleteContact = (userId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((tel) => tel.id !== userId)
    );
  };

  const filteredContacts = contacts.filter((userContact) =>
    userContact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onFilterContacts = (ev) => setFilter(ev.target.value);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox onFilterContacts={onFilterContacts} filter={filter} />
      <ContactList data={filteredContacts} onDeleteContact={onDeleteContact} />
    </>
  );
}

export default App;
