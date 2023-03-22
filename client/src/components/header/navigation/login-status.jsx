import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export default function LoginStatus({ currentUser, handleClick }) {
  return currentUser ? (
    <>
      Signed in as: {currentUser.username}
      <Button variant="danger" className="ms-2">
        Logout
      </Button>
    </>
  ) : (
    <Button onClick={handleClick}>Login/Register</Button>
  );
}

LoginStatus.propTypes = {
  currentUser: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
};
