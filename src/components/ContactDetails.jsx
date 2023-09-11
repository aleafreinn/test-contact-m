import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api/globalList";
import { useMainCrud } from "../context/MainCrudContext";

const DetailsModify = (props) => {
  const { modifyDescFunc } = useMainCrud();
  const navigate = useNavigate();
  const [newDesc, setNewDesc] = useState(props.changeDesc.desc);

  const DetailsHandler = (event) => {
    event.preventDefault();
    const finalChange = { ...props.changeDesc, desc: newDesc };
    modifyDescFunc(finalChange);
    navigate(`/contact/${props.changeDesc.id}`, {
      state: { contact: props.changeDesc },
    });
  };

  return (
    <form
      onSubmit={DetailsHandler}
      className="m-6 flex w-full max-w-md flex-col items-center gap-4
      rounded-lg bg-slate-100 px-4 py-2 text-gray-700 shadow-[inset_0_-10px_60px_0px_rgba(0,0,0,0.3)]"
    >
      <label className="text-lg">Input description below.</label>
      <input
        type="text"
        placeholder={
          props.changeDesc.desc[0]
            ? props.changeDesc.desc
            : "I work at TalentLabs!"
        }
        value={newDesc}
        onChange={(event) => setNewDesc(event.target.value)}
        className="box-border w-full border-b-2 border-gray-800 bg-transparent 
        text-center outline-none focus:border-yellow-500 focus:text-amber-600"
      />
      <button
        type="submit"
        className="bg-gray-800 px-2 py-1 font-bold text-slate-300"
      >
        Save
      </button>
    </form>
  );
};

DetailsModify.propTypes = {
  setDescFunc: PropTypes.function,
}.isRequired;

const ContactDetails = () => {
  // console.log(props);
  const { globalList, profileImageList } = useMainCrud();
  const location = useLocation();
  const currDesc = location.state.contact;
  const [changeDesc, setChangeDesc] = useState(currDesc);
  const [showEdit, setShowEdit] = useState(false);

  const refreshComponent = async () => {
    const response = await api.get(`/globalList/${changeDesc.id}`);
    setChangeDesc(response.data);
  };

  useEffect(() => {
    refreshComponent();
    setShowEdit((isTrue) => (isTrue ? false : true));
  }, [globalList]);

  return (
    <>
      <hr className="w-[95%]" />
      <h1
        className=" relative m-5 flex min-h-[10%] w-full max-w-[80%] flex-row justify-end overflow-hidden rounded-lg 
        border-0 bg-amber-800 px-4 py-2  shadow-[0px_15px_40px_-5px_rgba(164,46,14,1)] md:max-w-[45%]
        lg:max-w-[25%]"
      >
        <img
          src={changeDesc.pic ?? profileImageList[0].img}
          alt={`${changeDesc.name} profile pic`}
          className="to-bg-amber-800 absolute left-0 top-0 h-full w-[10rem] 
          object-cover gradient-mask-r-0"
        />
        <p
          className="w-1/2 text-right text-2xl font-bold 
        text-white/[0.8]"
        >
          {changeDesc.name}&apos;s Detail Page
        </p>
      </h1>
      <h2>{changeDesc.email}</h2>
      <section className="mb-8 mt-5 flex w-full flex-col items-center ">
        <h1 className="text-amber-500">
          About {changeDesc.name.split(" ")[0]}:
        </h1>
        <p className="mb-5 max-w-lg text-center text-2xl font-extralight">
          {changeDesc.desc[0]
            ? changeDesc.desc
            : `No information from ${
                changeDesc.name.split(" ")[0]
              }. Add a description!`}
        </p>
        <hr className="w-[95%]" />

        {showEdit ? (
          <DetailsModify
            changeDesc={changeDesc}
            // revertFunc={() => props.history.push("/")}
          />
        ) : (
          ""
        )}
        <button
          onClick={() => setShowEdit(!showEdit)}
          className="mt-2 rounded-md bg-purple-700 px-2 py-1
          font-semibold text-white focus:outline-none"
        >
          {changeDesc.desc[0]
            ? showEdit
              ? "Cancel edit"
              : "Edit description"
            : showEdit
            ? "Cancel edit"
            : "Add description here"}
        </button>
      </section>
      <Link to="/">
        <button className="animate-pulse bg-white px-4 py-2 text-gray-800">
          Revert back to main page
        </button>
      </Link>
    </>
  );
};

export default ContactDetails;

ContactDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
