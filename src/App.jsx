import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import DeleteConfirmation from "./components/DeleteConfirmation";

function App() {
  const LOCAL_STORAGE_KEY = "globalList";
  const [globalList, setGlobalList] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [],
  );

  const addContactFunc = (newContact) => {
    const setId = uuid();
    const newNewContact = { ...newContact, id: setId };
    setGlobalList((currList) => [...currList, newNewContact]);
    console.log(newNewContact);
  };

  const removeFunc = (id) => {
    const newGlobalList = globalList.filter((list) => {
      return list.id !== id;
    });

    return setGlobalList(newGlobalList);
  };

  useEffect(() => {
    console.log(globalList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(globalList));
  }, [globalList]);

  return (
    <div className=" flex h-full flex-col items-center justify-center">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList {...props} globalList={globalList} />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <ContactForm {...props} addContactFunc={addContactFunc} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetails} />
          <Route
            path="/contact_delete/:id"
            component={(props) => (
              <DeleteConfirmation {...props} removeFunc={removeFunc} />
            )}
          />
        </Switch>
        {/* <ContactForm addContactFunc={addContactFunc}/>
        <ContactList globalList={globalList} removeFunc={removeFunc}/> */}
      </Router>
    </div>
  );
}

export default App;
