import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  //   debugger;
  const location = useLocation();
  const navigate = useNavigate();

  const userLoggedIn = localStorage.getItem("isLoggedIn");
  const [isRedirecting, setIsRedirecting] = useState(true);
  useEffect(() => {
    if (userLoggedIn) {
      debugger;
      if (location.pathname.includes("login")) {
        navigate("/");
      } else {
        setIsRedirecting(false);
      }
    } else {
      setIsRedirecting(false);

      //   handle if user is not loggedin
      navigate("/login");
    }

    return () => {};
  }, [location.pathname, navigate, userLoggedIn]);

  return <>{!isRedirecting && children}</>;
};

export default ProtectedRoutes;
