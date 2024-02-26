import React from "react";
import "./TopHeader.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function TopHeader({ logoutHandler }) {
  const navigateTo = useNavigate();

  const clickHandler = () => {
    navigateTo("/cart");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://img.freepik.com/premium-vector/fresh-food-vector-design-logo_518759-168.jpg"
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item ms-3">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/shop" className="nav-link active" aria-current="page">
                Shop
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/blog" className="nav-link active" aria-current="page">
                Blog
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link
                to="/contact"
                className="nav-link active"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <button
              className="btn ms-1 btn-outline-success "
              onClick={clickHandler}
            >
              Cart
            </button>
            <button
              onClick={logoutHandler}
              className="btn ms-1 btn-outline-success "
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopHeader;
