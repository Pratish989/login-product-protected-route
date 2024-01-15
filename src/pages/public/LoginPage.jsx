import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "admin") {
      onLogin();
      setError(false);
      navigate("/home");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <label htmlFor="email">Email Address</label>
      <input type="email" value={email} onChange={handleChange} />
      <br />
      {error && <p style={{ color: "red" }}>Invalid email address</p>}
      <button type="submit" onClick={handleLogin} style={{ color: "blue" }}>
        Log In
      </button>
    </div>
  );
}

export default LoginPage;


