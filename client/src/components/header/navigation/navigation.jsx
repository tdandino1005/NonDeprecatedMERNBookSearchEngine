import { CURRENT_USER } from "@/schema/type-defs";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LoginStatus from "./login-status";
import RegisterLogin from "./register-login/register-login";

export default function Navigation() {
  const [isShowingRegisterLogin, setIsShowingRegisterLogin] = useState(false);

  const { data } = useQuery(CURRENT_USER);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h1 className="text-white">Search For 📚</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse className="justify-content-end" id="nav">
            <Navbar.Text className="text-white">
<<<<<<<< HEAD:client/src/components/header/navigation.jsx
              {data?.currentUser ? (
                <>
                  Signed in as: {data.currentUser.username}
                  <Button className="ms-2">Logout</Button>
                </>
              ) : (
                <Button onClick={() => setIsShowingRegisterLogin(true)}>
                  Login/Register
                </Button>
========
              {data?.currentUser && (
                <LoginStatus
                  currentUser={data.currentUser}
                  handleClick={() => setIsShowingRegisterLogin(true)}
                />
>>>>>>>> c22c2d89d3b6059fef4272d8640f5433acdf25e0:client/src/components/header/navigation/navigation.jsx
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
