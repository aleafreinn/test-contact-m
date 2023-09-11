import { createContext, useContext, useState } from "react";
import api from "../api/globalList";
import PropTypes from "prop-types";
import preImageList from "../assets/profilePic";
import { v4 as uuid } from "uuid";

const MainCrudContext = createContext();

export function MainCrudContextProvider({ children }) {
  const [globalList, setGlobalList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //   to fetch the data:
  const retrieveGlobalList = async () => {
    const response = await api.get("/globalList");
    if (response.data) {
      setGlobalList(response.data);
    }
  };

  // to import and set images into array
  function imageListMaker() {
    const profilePicList = preImageList;
    const initPicObj = [];
    for (let i = 0; i < profilePicList.length; i++) {
      initPicObj.push({
        id: i,
        img: profilePicList[i],
      });
    }
    return initPicObj;
  }
  const profileImageList = imageListMaker();

  // to remove contacts
  const removeFunc = async (id) => {
    await api.delete(`/globalList/${id}`);
    const newGlobalList = globalList.filter((list) => {
      return list.id !== id;
    });

    return setGlobalList(newGlobalList);
  };

  // to add contact in the list
  const addContactFunc = async (newContact) => {
    const setId = uuid();
    const requestContact = { ...newContact, id: setId };
    const response = await api.post("/globalList", requestContact);
    console.log(response); /* to define the data location inside response */
    setGlobalList((currList) => [...currList, response.data]);
    // console.log(setNewContact);
  };

  // to make changes in the contact
  const updateContactFunc = async (newDetails) => {
    const response = await api.put(`/globalList/${newDetails.id}`, newDetails);
    console.log(response);
    const { id } = response.data;
    const updatedContact = globalList.map((list) => {
      if (list.id === id) {
        return { ...response.data };
      } else return list;
    });
    setGlobalList(updatedContact);
  };

  // to modify description in the specific contact
  const modifyDescFunc = async (newDesc) => {
    const response = await api.put(`/globalList/${newDesc.id}`, newDesc);
    const { id } = response.data;
    const updatedContact = globalList.map((list) => {
      if (list.id === id) {
        return { ...response.data };
      } else return list;
    });
    setGlobalList(updatedContact);
  };

  // to apply for the search functionality
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (searchTerm !== "") {
      const newContactList = globalList.filter((list) => {
        const cleanedList = {
          name: list.name,
          email: list.email,
          desc: list.desc,
        };
        return Object.values(cleanedList)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(globalList);
    }
  };

  const value = {
    globalList,
    retrieveGlobalList,
    profileImageList,
    removeFunc,
    addContactFunc,
    updateContactFunc,
    searchTerm,
    handleSearch,
    searchResult,
    modifyDescFunc,
  };

  return (
    <MainCrudContext.Provider value={value}>
      {children}
    </MainCrudContext.Provider>
  );
}

export function useMainCrud() {
  return useContext(MainCrudContext);
}

MainCrudContextProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
