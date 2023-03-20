import { useState } from "react";
import { Outlet } from "react-router-dom";
import { decodeUserFromToken } from "../utils";
import Navigation from "./components/navigation";

export default function Layout() {
  // This ℹ️ info will be needed by Outlet components
  const [user, setUser] = useState(decodeUserFromToken());

  return (
    <>
      <Navigation user={user} setUser={setUser} />
      <Outlet />
    </>
  );
}
