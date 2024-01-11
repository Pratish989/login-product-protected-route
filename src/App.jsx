import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/public/AboutPage";
import LoginPage from "./pages/public/LoginPage";
import ContactPage from "./pages/public/Contact";
import NavigationBar from "./pages/public/NavigationBar";
import ProductPage from "./pages/private/ProductPage";
import LogoutPage from "./pages/public/LogoutPage";
import RequireAuth from "./RequireAuth";
import ErrorPage from "./pages/public/ErrorPage";
import SingleProductPage from "./pages/private/SingleProductPage";
import HomePage from "./pages/public/HomePage";
// import NavigationPage from "./pages/public/NavigationBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar/>}>
            <Route path="home" element={<HomePage/>}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route
              path="product"
              element={
                <RequireAuth>
                  <ProductPage />
                </RequireAuth>
              }
            ></Route>

            <Route
              path="product/:productId"
              element={<SingleProductPage />}
            ></Route>

            <Route path="logout" element={<LogoutPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
