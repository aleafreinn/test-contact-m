import ListContainer from "./ListContainer";
// import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContactList = (props) => {
  // const [currList, setCurrList] = useState({});

  const totalList = props.globalList.map((list) => {
    // let newList = list;
    // const modifyList = (newDesc) => {
    //   newList = { ...list, desc: newDesc };
    //   setCurrList(newList);
    //   // list = { ...currList };
    //   console.log(newList);
    //   console.log("im working");
    // };
    return (
      <>
        <ListContainer
          key={/* currList.id ??  */ list.id}
          listContent={/* currList[0] ??  */ list}
          // modifyList={modifyList}
        />
      </>
    );
  });

  return (
    <>
      <section className="mt-8 flex flex-col items-center">
        <hr className="w-screen" />
        <hr className="mt-1 w-screen" />
        <header
          className="m-5 rounded-lg border-0 bg-violet-600 px-4 py-2 text-2xl
        font-bold text-white/[0.8] shadow-[0px_15px_40px_-5px_rgba(139,92,246,1)] shadow-violet-400"
        >
          Saved Contacts
        </header>
        <h2 className="p-3 text-center text-lg">
          All of the contacts that were added will be showed below.
        </h2>
        {totalList}
        <Link to="/add">
          <button className="animate-pulse bg-white px-4 py-2 text-gray-800">
            {props.globalList[0] ? "Add another contact" : "Add a contact"}
          </button>
        </Link>
      </section>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  globalList: PropTypes.object,
}.isRequired;
