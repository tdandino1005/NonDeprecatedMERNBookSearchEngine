import { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../context/auth";
import { decodeUserFromToken } from "../utils";
import Navigation from "./components/navigation";

export default function Layout() {
  const [user, setUser] = useState(decodeUserFromToken());

  return (
    // We are passing 'global props' to allow any/all components to access 'useState' values.
    <AuthContext.Provider value={[user, setUser]}>
      <Navigation />
      <Outlet />
    </AuthContext.Provider>
  );
}
