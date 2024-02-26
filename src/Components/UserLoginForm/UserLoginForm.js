import React, { useState, useEffect } from "react";
import "./UserLoginForm.css"; // Import your stylesheet
import { useNavigate } from "react-router";

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    termsChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const loginHandler = () => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", 1);
    // setIsLoggedIn(true);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username.length > 5 &&
      formData.email &&
      formData.password.length > 8 &&
      formData.termsChecked
    ) {
      loginHandler();
    }
  };

  return (
    <div className="form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="checkbox">
            <input
              type="checkbox"
              name="termsChecked"
              checked={formData.termsChecked}
              onChange={handleChange}
            />
            I agree to the terms and policy
          </label>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
