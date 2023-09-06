// import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListContainer = (props) => {
  const { id, name, email, desc } = props.listContent;
  // const [currList, setCurrList] = useState(props.listContent);

  // const modifyDesc = (setDesc) => {
  //   const newList = { ...currList, desc: setDesc };
  //   return setCurrList(newList);
  // };

  return (
    <div className="m-3 box-border flex w-[95%] max-w-md flex-col items-center rounded-lg border-2 border-white bg-slate-700/[0.3] px-2 py-1">
      <div
        className="flex w-full flex-row 
                    items-center justify-between"
      >
        <div>
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: {},
              data: {
                contact: props.listContent,
                modifyFunc: props.modifyList,
                // modifyFunc: modifyDesc,
              },
            }}
          >
            <h1 className="font-bold">{name}</h1>
            <h2 className=" max-w-sm text-amber-600">{email}</h2>
            <h3>{desc}</h3>
          </Link>
        </div>
        <Link
          to={{
            pathname: `/contact_delete/${id}`,
            state: { contactDelete: props.listContent },
          }}
        >
          <button
            className=" m-2 border-red-800 px-2 py-1 text-sm text-red-500 transition-all
          duration-200 ease-in-out hover:border-transparent hover:bg-red-500 hover:text-gray-800 "
          >
            delete contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListContainer;

ListContainer.propTypes = {
  listContent: PropTypes.object,
}.isRequired;
