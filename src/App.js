import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import UserLoginForm from "./Components/UserLoginForm/UserLoginForm";
import FoodShop from "./Components/FoodShop/FoodShop";
import MyCart from "./Components/MyCart/MyCart";
import SearchResult from "./Components/SearchResult/SearchResult";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
// import DataGridDemo from "./Components/dummyComponent/dummyComponent";
// import { DataGrid } from "@mui/x-data-grid";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const userLoggedIn = localStorage.getItem("isLoggedIn");
  //     if (userLoggedIn === "1") {
  //       setIsLoggedIn(true);
  //     }
  //     navigate(userLoggedIn === "1" ? "/" : "/login");
  //   }, []);

  //   useEffect(() => {}, []);

  const logoutHandler = () => {
    // setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <Routes>
      <Route
        exact
        path="/login"
        element={
          <ProtectedRoutes>
            <UserLoginForm />
          </ProtectedRoutes>
        }
      />

      <Route path="/" element={<Home logoutHandler={logoutHandler} />} />

      <Route
        path="/shop"
        element={
          <ProtectedRoutes>
            <FoodShop />
          </ProtectedRoutes>
        }
      />
      <Route path="/result" element={<SearchResult />} />
      <Route path="/cart" element={<MyCart />} />

      <Route path="*" element={<div>Path Not Found</div>} />
      {/* <Route path="grid" element={<DataGridDemo />} /> */}
    </Routes>
  );
}

export default App;
