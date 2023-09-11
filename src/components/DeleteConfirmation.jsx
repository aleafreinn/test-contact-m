import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import { useMainCrud } from "../context/MainCrudContext";

const DeleteConfirmation = () => {
  const location = useLocation();
  const { id, name, email } = location.state.contactDelete;
  const { removeFunc } = useMainCrud();
  return (
    <>
      <hr className="w-[95%]" />
      <h1 className="pt-4 text-2xl text-amber-500">{email}</h1>
      <h2 className="p-3 text-center">
        Are you sure you want to{" "}
        <span className="text-red-500">delete {name}</span> from the contact
        list?
      </h2>
      <div className="flex flex-row items-center">
        <Link to="/">
          <button
            onClick={() => removeFunc(id)}
            className=" m-2 border-green-800 px-2 py-1 text-sm text-green-500 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-green-500 hover:text-gray-800 "
          >
            Yes
          </button>
        </Link>
        <Link to="/">
          <button className=" m-2 border-red-800 px-2 py-1 text-sm text-red-500 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-red-500 hover:text-gray-800 ">
            No
          </button>
        </Link>
      </div>
    </>
  );
};

export default DeleteConfirmation;

// DeleteConfirmation.propTypes = {
//   location: PropTypes.object,
// }.isRequired;
