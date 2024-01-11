/* eslint-disable no-unused-vars */
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogoutPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleLogout() {
    logout();
    localStorage.clear();
    navigate("/login");
    setToken("");
    console.log(token);
  }
  return (
    <>
      <div>LogoutPage</div>
      <button onClick={handleLogout} style={{ color: "blue" }}>
        Logout
      </button>
    </>
  );
};

export default LogoutPage;
