import PropTypes from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import RegisterLogin from "./register-login/register-login";

export default function Navigation({ user, setUser }) {
  const [isShowingRegisterLogin, setIsShowingRegisterLogin] = useState(false);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Search For 📚
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse className="justify-content-end" id="nav">
            <Navbar.Text>
              {user ? (
                <>
                  Signed in as: {user.username}.{" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setUser(null);
                    }}
                  >
                    Logout?
                  </Button>{" "}
                </>
              ) : (
                <Button onClick={() => setIsShowingRegisterLogin(true)}>
                  Login/Register
                </Button>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <RegisterLogin
        isShowing={isShowingRegisterLogin}
        hide={() => {
          setIsShowingRegisterLogin(false);
        }}
      />
    </>
  );
}

Navigation.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};
