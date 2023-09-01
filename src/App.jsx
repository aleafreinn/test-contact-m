import { useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  const LOCAL_STORAGE_KEY = 'globalList';
  const [globalList, setGlobalList] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactFunc = (newContact) => {
    const setId = uuid();
    const newNewContact = {...newContact, id: setId}
    setGlobalList((currList) => [...currList, newNewContact]);
    console.log(newNewContact);
  }

  const removeFunc = (id) => {
    const newGlobalList = globalList.filter((list) => {
      return list.id !== id;
    })

    return setGlobalList(newGlobalList)
  }

  useEffect(() => {
    console.log(globalList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(globalList))
  }, [globalList])

  return (
    <div className=' h-full flex flex-col items-center justify-center'>
      <Header />
      <ContactForm addContactFunc={addContactFunc}/>
      <ContactList globalList={globalList} removeFunc={removeFunc}/>
    </div>
  )
}

export default App
