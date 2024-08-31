import { getElementError } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.theme === "dark" ? "dark" : "light"}
      style={{
        height: "80px",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          OfficialSubham
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          <div className="">
            <input
              type="color"
              className="mx-2"
              id="primaryColor"
            />
            {/* <input type="color" className="mx-2"  id="secondaryColor"/> */}

            <button className="btn btn-primary mx-2" onClick={props.customiseTheme}>
              Customise Theme
            </button>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.changeTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={
                {
                  color: props.theme === "dark" ? "#ffffff" : "#000000"
                }
              }
            >
              Change Theme
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
