/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, redirect } from "react-router-dom";

let staticEmail = "admin";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [token,setToken] = useState(" ")
  console.log(token)

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === staticEmail) {
      setToken("login token")
      setToken(localStorage.setItem("token","login token"))
      setError(false);
      console.log(token)
      navigate("/home");
      navigate(0)
      history.push()
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

