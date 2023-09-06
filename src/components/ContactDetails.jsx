import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContactDetails = (props) => {
  // console.log(props);
  const { id, name, email, desc } = props.location.data.contact;
  const setDescFunc = props.modifyDescFunc;
  const [showEdit, setShowEdit] = useState(false);

  const DetailsModify = (props) => {
    const [newDesc, setNewDesc] = useState("");

    const DetailsHandler = (event) => {
      event.preventDefault();
      props.setDescFunc(id, newDesc);
      alert("Successfully changed the description.");
      console.log(props);
      props.revertFunc();
      // props.history.push("/");
      // this.props.history.push(`/contact/${id}`);
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
          placeholder={desc}
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

  return (
    <>
      <hr className="w-[95%]" />
      <h1
        className="m-5 rounded-lg border-0 bg-amber-800 px-4 py-2 text-center text-2xl
        font-bold text-white/[0.8] shadow-[0px_15px_40px_-5px_rgba(164,46,14,1)] "
      >
        {name}&apos;s Detail Page
      </h1>
      <h2>{email}</h2>
      <section className="mb-8 mt-5 flex w-full flex-col items-center ">
        <h1 className="text-amber-500">About {name.split(" ")[0]}:</h1>
        <p className="mb-5">
          {desc[0]
            ? desc
            : `No information from ${name.split(" ")[0]}. Add a description!`}
        </p>
        <hr className="w-[95%]" />

        {showEdit ? (
          <DetailsModify
            setDescFunc={setDescFunc}
            revertFunc={() => props.history.push("/")}
          />
        ) : (
          ""
        )}
        <button
          onClick={() => setShowEdit(!showEdit)}
          className="mt-2 rounded-md bg-purple-700 px-2 py-1
          font-semibold text-white focus:outline-none"
        >
          {desc[0]
            ? showEdit
              ? "Cancel edit"
              : "Edit here"
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
