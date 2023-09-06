import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import {v4 as uuid} from 'uuid'

class ContactForm extends React.Component {
  initForm = {
    id: "",
    name: "",
    email: "",
    desc: "",
  };

  state = this.initForm;

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Fields must not be empty!");
      this.setState(this.initForm);
      return;
    }
    // const setId = uuid();
    // this.setState({id: '1'})
    this.props.addContactFunc(this.state);
    this.setState(this.initForm);
    // console.log(this.props); //to see the .history.push()
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.submitHandler}
          className="flex flex-col items-center gap-2 rounded-2xl border-0 bg-slate-100 px-3 py-6 text-slate-800 shadow-[inset_0_35px_60px_0px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col items-center">
            <label className="font-bold">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
              className="border-b-2 border-slate-800 bg-transparent px-2 py-1 text-center transition-all duration-300 ease-in-out focus:border-amber-300 focus:text-yellow-600 focus:outline-0"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="font-bold">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              className="border-b-2 border-slate-800 bg-transparent px-2 py-1 text-center transition-all duration-300 ease-in-out focus:border-amber-300 focus:text-yellow-600 focus:outline-0"
            />
          </div>
          <button
            type="submit"
            className="w-fit bg-slate-800 px-2 py-1 font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,1)] transition-all duration-200 ease-in-out hover:border-transparent hover:bg-yellow-600 hover:shadow-[0_10px_30px_rgba(202,138,4,1)] focus:outline-none active:outline-none"
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
  }
}

ContactForm.propTypes = {
  addContactFunc: PropTypes.function,
}.isRequired;

export default ContactForm;
