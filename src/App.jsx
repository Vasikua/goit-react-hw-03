import { useState } from 'react'
import { Formik } from 'formik';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import SearchBox from './components/searchBox/SearchBox';


export default function App() {
  const [user, setUser] = useState(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [search, setSearch] = useState(''); 

  const addUser = (newUser) => {
    console.log("data from FORM", newUser)
  };

  const deleteUser = (userId) => {
    setUser((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId)
    });
  };
  const visibleContact = user.filter((users) => 
    users.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={ search } onSearch={setSearch} />
      <ContactList data = {visibleContact} onDelete={deleteUser} />
    </div>
  )
}


