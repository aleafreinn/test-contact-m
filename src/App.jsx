// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import api from "./api/globalList";
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import EditForm from "./components/EditForm";
import DeleteConfirmation from "./components/DeleteConfirmation";
import { MainCrudContextProvider } from "./context/MainCrudContext";

function App() {
  // const LOCAL_STORAGE_KEY = "globalList";

  // const [globalList, setGlobalList] = useState(
  //   /* JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? */ [],
  // );

  // useEffect(() => {
  //   const getAllList = async () => {
  //     const allList = await retrieveGlobalList();
  //     if (allList) {
  //       setGlobalList(allList);
  //     }
  //   };

  //   getAllList();
  // }, []);

  // useEffect(() => {
  //   console.log(globalList);
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(globalList));
  // }, [globalList]);

  return (
    <div className=" flex h-full flex-col items-center justify-center">
      <Router>
        <Header />
        <MainCrudContextProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={<ContactList />}
              // render={(props) => (
              //   <ContactList
              //     {...props}
              //     globalList={searchTerm[0] ? searchResult : globalList}
              //     defaultPic={profileImageList[0].img}
              //     searchTerm={searchTerm}
              //     handleSearch={handleSearch}
              //   />
              // )}
            />
            <Route
              path="/add"
              element={<ContactForm />}
              // render={(props) => (
              //   <ContactForm
              //     {...props}
              //     addContactFunc={addContactFunc}
              //     profilePicList={profileImageList}
              //   />
              // )}
            />
            <Route
              exact
              path="/contact/:id"
              element={<ContactDetails />}
              // component={(props) => (
              //   <ContactDetails
              //     {...props}
              //     modifyDescFunc={modifyDescFunc}
              //     defaultPic={profileImageList[0].img}
              //   />
              // )}
            />
            <Route
              path="/contact_edit/:id"
              element={<EditForm />}
              // render={(props) => (
              //   <EditForm
              //     {...props}
              //     updateContactFunc={updateContactFunc}
              //     profilePicList={profileImageList}
              //   />
              // )}
            />
            <Route
              path="/contact_delete/:id"
              element={<DeleteConfirmation />}
              // render={(props) => (
              //   <DeleteConfirmation {...props} removeFunc={removeFunc} />
              // )}
            />
          </Routes>
          {/* <ContactForm addContactFunc={addContactFunc}/>
        <ContactList globalList={globalList} removeFunc={removeFunc}/> */}
        </MainCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
