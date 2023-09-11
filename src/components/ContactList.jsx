import ListContainer from "./ListContainer";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMainCrud } from "../context/MainCrudContext";
// import PropTypes from "prop-types";
import searchIcon from "../assets/icons8-search.svg";

const ContactList = () => {
  const {
    globalList,
    retrieveGlobalList,
    searchTerm,
    handleSearch,
    searchResult,
  } = useMainCrud();
  const inputEl = useRef("");

  const totalList = (searchTerm[0] ? searchResult : globalList).map((list) => {
    return (
      <>
        <ListContainer
          key={/* currList.id ??  */ list.id}
          listContent={/*  currList[0] ??  */ list}
          // defaultPic={props.defaultPic}
          // modifyList={modifyList}
        />
      </>
    );
  });

  const getSearchTerm = () => {
    // props.handleSearch(inputEl.current.value);
    handleSearch(inputEl.current.value);
  };

  useEffect(() => {
    retrieveGlobalList();
  }, []);

  return (
    <>
      <section className="mt-8 flex w-screen flex-col items-center">
        <hr className="w-screen" />
        <hr className="mt-1 w-screen" />
        <header className="relative">
          <div
            className="h-4 translate-y-12 scale-150 animate-gradient
          bg-gradient-to-br from-indigo-500 to-amber-500 bg-[length:400%_400%]
          blur-xl"
          ></div>
          <h1
            className="relative rounded-md bg-[#242424] px-8 py-4 text-2xl font-normal
          text-amber-100 drop-shadow-lg"
          >
            Your Saved Contacts
          </h1>
        </header>
        <h2 className="p-3 text-center text-lg">
          All of the contacts that were added will be showed below.
        </h2>

        <div className="align-center mb-5 flex flex-row justify-center gap-2">
          <input
            ref={inputEl}
            type="text"
            placeholder="search contact here"
            value={searchTerm}
            onChange={getSearchTerm}
            className="w-40 border-b-2 border-violet-400  bg-transparent 
            text-center transition-all duration-300 ease-in-out focus:w-60
            focus:border-amber-500 focus:text-amber-400 focus:outline-none"
          />
          <img src={searchIcon} alt="search icon" className="w-6 invert" />
        </div>

        <Link to="/add">
          <button className="z-0 mb-4 animate-pulse bg-white px-4 py-2 text-gray-800">
            {globalList[0] ? "Add another contact" : "Add a contact"}
          </button>
        </Link>
        {searchTerm[0]
          ? searchResult[0]
            ? totalList
            : "No contacts found on search result."
          : totalList}
      </section>
    </>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   globalList: PropTypes.object,
// }.isRequired;
