import { ProfileButtonList } from "./ContactForm";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
import { useMainCrud } from "../context/MainCrudContext";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateContactFunc, profileImageList } = useMainCrud();
  const currChanges = location.state.contactEdit;
  const [changes, setChanges] = useState(currChanges);

  const submitHandler = (event) => {
    event.preventDefault();
    if (changes.name === "" || changes.email === "") {
      alert("Fields must not be empty!");
      setChanges(currChanges);
      return;
    }
    console.log(changes);
    updateContactFunc(changes);
    navigate("/");
    // props.history.push("/");
  };

  const profileButtonHandler = (imageNum) => {
    setChanges({ ...changes, pic: profileImageList[imageNum].img });
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex max-w-lg flex-col items-center gap-2 rounded-2xl border-0
        bg-slate-100 px-3 py-6 text-slate-800 shadow-[inset_0_35px_60px_0px_rgba(0,0,0,0.3)]"
      >
        <div className="flex flex-col items-center">
          <label className="font-bold">Name</label>
          <input
            type="text"
            placeholder={currChanges.name}
            value={changes.name}
            onChange={(event) =>
              setChanges({ ...changes, name: event.target.value })
            }
            className="border-b-2 border-slate-800 bg-transparent px-2 py-1
            text-center transition-all duration-300 ease-in-out focus:border-amber-300 
            focus:text-yellow-600 focus:outline-0"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder={currChanges.email}
            value={changes.email}
            onChange={(event) =>
              setChanges({ ...changes, email: event.target.value })
            }
            className="border-b-2 border-slate-800 bg-transparent px-2 py-1 
            text-center transition-all duration-300 ease-in-out focus:border-amber-300 
            focus:text-yellow-600 focus:outline-0"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <label className="font-bold">Choose Avatar</label>
          <section className="flex w-full flex-row flex-wrap justify-center gap-4 p-3">
            <ProfileButtonList
              // profileImages={props.profilePicList}
              profileButtonHandler={profileButtonHandler}
            />
          </section>
        </div>
        <button
          type="submit"
          className="w-fit bg-slate-800 px-2 py-1 font-bold text-white 
          shadow-[0_10px_30px_rgba(0,0,0,1)] transition-all duration-200 ease-in-out 
          hover:border-transparent hover:bg-yellow-600 hover:shadow-[0_10px_30px_rgba(202,138,4,1)] 
          focus:outline-none active:outline-none"
        >
          Save Changes
        </button>
      </form>
      <Link to="/">
        <button className="m-4 rounded-md bg-slate-200 px-2 py-1 text-gray-800">
          Cancel Edit
        </button>
      </Link>
    </>
  );
};

export default EditContact;

// EditContact.propTypes = {
//   location: PropTypes.object,
//   history: PropTypes.object,
//   updateContactFunc: PropTypes.function,
// }.isRequired;
