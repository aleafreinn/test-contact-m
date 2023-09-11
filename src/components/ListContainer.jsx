import { useMainCrud } from "../context/MainCrudContext";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cogwheel from "../assets/cogwheel.png";

const ListContainer = (props) => {
  const { profileImageList } = useMainCrud();
  const [showSettings, setShowSettings] = useState(false);
  const settingsMenu = useRef("");
  const { id, name, email, desc, pic } = props.listContent;
  // const [currList, setCurrList] = useState(props.listContent);

  // const modifyDesc = (setDesc) => {
  //   const newList = { ...currList, desc: setDesc };
  //   return setCurrList(newList);
  // };

  const toggleMenu = () => {
    setShowSettings(!showSettings);
    console.log(settingsMenu.current);
    // settingsMenu.current.classList.toggle("hidden");
    settingsMenu.current.classList.toggle("flex");
  };

  return (
    <section
      className="m-3 box-border flex w-[95%] max-w-lg flex-col items-center 
    rounded-lg border-2 border-white bg-slate-700/[0.3] py-4 pl-4"
    >
      <div
        className=" relative flex w-full  flex-row
                     items-center justify-between"
      >
        <div className="w-full">
          <Link
            to={`/contact/${id}`}
            state={{ contact: props.listContent }}
            // data: {
            //   modifyFunc: props.modifyList,
            //   // modifyFunc: modifyDesc,
            // }
          >
            <section className="flex flex-row justify-start gap-4">
              <img
                className="w-1/6 rounded-lg border-2 p-1"
                src={pic ?? profileImageList[0].img}
                alt={`${name} profile pic`}
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold">{name}</h1>
                <h2 className="max-w-sm text-amber-600">{email}</h2>
              </div>
            </section>
            <hr className="mb-2 mt-4 w-[95%]" />
            <h3 className="text-sm font-normal">
              {desc[0] ? (
                desc
              ) : (
                <span className="text-amber-600">
                  Click the card to add description!
                </span>
              )}
            </h3>
          </Link>
        </div>
        <button
          type="button"
          className="w-12 border-2 border-transparent p-2 invert 
          hover:border-transparent focus:border-gray-900 
          focus:shadow-md focus:shadow-white 
          focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <img src={cogwheel} alt="settings icon" />
        </button>
        <div
          ref={settingsMenu}
          className={`${
            showSettings ? "flex" : "hidden"
          } absolute right-[15%] top-[-25%] mt-0 box-border w-[23%] 
          flex-col items-center justify-center gap-2 rounded-md border-2
          border-slate-300 px-4 py-2 shadow-lg shadow-black/[0.6] backdrop-blur-md 
          md:relative md:right-0 md:top-0 md:flex md:w-[20%] md:border-none md:shadow-none`}
        >
          <Link
            to={`/contact_edit/${id}`}
            state={{ contactEdit: props.listContent }}
          >
            <button
              className=" border-blue-800 px-2 py-1 text-sm text-blue-500 transition-all
          duration-200 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-gray-800 "
            >
              edit contact
            </button>
          </Link>
          <Link
            to={`/contact_delete/${id}`}
            state={{ contactDelete: props.listContent }}
          >
            <button
              className=" border-red-800 px-2 py-1 text-sm text-red-500 transition-all
          duration-200 ease-in-out hover:border-transparent hover:bg-red-500 hover:text-gray-800 "
            >
              delete contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ListContainer;

ListContainer.propTypes = {
  listContent: PropTypes.object,
}.isRequired;
