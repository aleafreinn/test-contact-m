import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContactDetails = (props) => {
  console.log(props);
  const { name, email } = props.location.state.contact;
  return (
    <>
      <h1>details page</h1>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <Link to="/">
        <button>revert back to main page</button>
      </Link>
    </>
  );
};

export default ContactDetails;

ContactDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
