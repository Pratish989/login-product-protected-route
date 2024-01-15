import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

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
