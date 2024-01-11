import StyleNavbarPublic from "../navigation/StyleNavbarPublic";
import StyleNavbarPrivate from "../navigation/StyleNavbarPrivate"
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavigationBar = () => {
  const isToken = localStorage.getItem("token")
  // const [isToken, setIsToken] = useState(localStorage.getItem("token"))
  // !isToken ? setIsToken(localStorage.setItem("token", "login token")) : null
  // const isToken = ;
  console.log("isToken", isToken);
  return (
    <>
      {isToken ? <StyleNavbarPrivate /> : <StyleNavbarPublic />}
      <Outlet />
    </>
  );
};

export default NavigationBar;
