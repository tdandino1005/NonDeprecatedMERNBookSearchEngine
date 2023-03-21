import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export default function Error({ message, code }) {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{message}</p>
      <hr />
      <p className="mb-0">{code}</p>
    </Alert>
  );
}

Error.defaultProps = {
  message: "An unknown error occurred.",
  code: "UNKNOWN",
};

Error.propTypes = {
  message: PropTypes.string,
  code: PropTypes.string,
};
