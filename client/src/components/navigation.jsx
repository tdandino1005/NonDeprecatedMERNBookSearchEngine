import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth";
import RegisterLogin from "./register-login/register-login";

export default function Navigation() {
  const [isShowingRegisterLogin, setIsShowingRegisterLogin] = useState(false);

  const [user, setUser] = useContext(AuthContext);

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
