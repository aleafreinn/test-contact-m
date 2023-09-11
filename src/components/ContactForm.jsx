import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useMainCrud } from "../context/MainCrudContext";
// import {v4 as uuid} from 'uuid'

export const ProfileButtonList = (props) => {
  const { profileImageList } = useMainCrud();
  const profileButton = profileImageList.map((image) => {
    return (
      <>
        <button
          onClick={() => props.profileButtonHandler(image.id)}
          type="button"
          className="w-1/6 rounded-full p-1 shadow-lg shadow-gray-900/[.5] 
        hover:border-gray-800 focus:border-amber-600 focus:shadow-amber-800 
        focus:outline-none"
        >
          <img
            src={image.img}
            alt={`profile${image.id}`}
            className="rounded-full"
          />
        </button>
      </>
    );
  });
  return <>{profileButton}</>;
};

ProfileButtonList.propTypes = {
  profileImages: PropTypes.array,
  profileButtonHandler: PropTypes.function,
}.isRequired;

const ContactForm = () => {
  const { addContactFunc, profileImageList } = useMainCrud();
  const navigate = useNavigate();
  const initForm = {
    id: "",
    name: "",
    email: "",
    desc: "",
    pic: profileImageList[0].img,
  };

  const [newForm, setNewForm] = useState(initForm);

  const submitHandler = (event) => {
    event.preventDefault();
    if (newForm.name === "" || newForm.email === "") {
      alert("Fields must not be empty!");
      setNewForm(initForm);
      return;
    }
    // const setId = uuid();
    // this.setState({id: '1'})
    addContactFunc(newForm);
    setNewForm(initForm);
    // console.log(this.props); //to see the .history.push()
    navigate("/");
  };

  const profileButtonHandler = (imageNum) => {
    setNewForm({ ...newForm, pic: profileImageList[imageNum].img });
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex max-w-lg flex-col items-center gap-2 rounded-2xl 
          border-0 bg-slate-100 px-3 py-6 text-slate-800 
          shadow-[inset_0_35px_60px_0px_rgba(0,0,0,0.3)]"
      >
        <div className="flex w-full flex-col items-center">
          <label className="font-bold">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={newForm.name}
            onChange={(event) =>
              setNewForm({ ...newForm, name: event.target.value })
            }
            className="w-1/2 border-b-2 border-slate-800 bg-transparent 
              px-2 py-1 text-center transition-all duration-300 ease-in-out 
              focus:border-amber-300 focus:text-yellow-600 focus:outline-0"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder="johndoe@example.com"
            value={newForm.email}
            onChange={(event) =>
              setNewForm({ ...newForm, email: event.target.value })
            }
            className="w-1/2 border-b-2 border-slate-800 bg-transparent 
              px-2 py-1 text-center transition-all duration-300 ease-in-out 
              focus:border-amber-300 focus:text-yellow-600 focus:outline-0"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <label className="font-bold">Choose Avatar</label>
          <section className="flex w-full flex-row flex-wrap justify-center gap-4 p-3">
            <ProfileButtonList
              // profileImages={this.props.profilePicList}
              profileButtonHandler={profileButtonHandler}
            />
          </section>
        </div>
        <button
          type="submit"
          className="w-fit bg-slate-800 px-2 py-1 font-bold text-white 
            shadow-[0_10px_30px_rgba(0,0,0,1)] transition-all duration-200 
            ease-in-out hover:border-transparent hover:bg-yellow-600 
            hover:shadow-[0_10px_30px_rgba(202,138,4,1)] focus:outline-none 
            active:outline-none"
        >
          Add contact
        </button>
      </form>

      <Link to="/">
        <button className="m-4 rounded-md bg-slate-200 px-2 py-1 text-gray-800">
          Back
        </button>
      </Link>
    </>
  );
};

ContactForm.propTypes = {
  addContactFunc: PropTypes.function,
}.isRequired;

export default ContactForm;
