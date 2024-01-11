/* eslint-disable no-unused-vars */
import { useAuth } from "../../hooks/useAuth";
import { useNavigate , Navigate} from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";

const LogoutPage = () => {
const { logout } = useAuth();
const navigate = useNavigate();
const [token, setToken] = useState(localStorage.getItem("token"));

function handleLogout() {
  logout();
  localStorage.clear();
  // <Navigate to={<LoginPage/>}/>
  navigate("/login");
  setToken("");
  // location.reload()
  navigate(0)
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


