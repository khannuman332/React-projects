import React, { useEffect, useState } from "react";
import './App.css';
import Header from"./Header"
import ContactList from"./ContactList"
import AddContact from"./AddContact"

function App() {
  const LOCAL_STORAGE_KEY= "contacts"
  const [contacts,setContacts] = useState([]);
  const  addContactHandler = (contact)=>{
    setContacts([...contacts,contact])
  }
  useEffect (()=>{
   const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (retriveContacts) setContacts(retriveContacts)
  },[]);

  const getLocalData = () => {
    const retriveContacts = localStorage.getItem("LOCAL_STORAGE_KEY");
  
    if (retriveContacts) {
      return JSON.parse(retriveContacts);
    } else {
      return [];
    }
  };

  useEffect (()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  return (
   <div className="ui container">
   <Header />
   <AddContact addContactHandler ={ addContactHandler}/>
   <ContactList contacts={contacts}/>

   </div>
  );
}

export default App;
