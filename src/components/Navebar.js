import React,{useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import icon from "../sources/navicon.png";
import context  from "../contextAPI/context";

export default function Navebar() {
  const alertContext = useContext(context)
  const {showAlert,reset} = alertContext

  const navigate = useNavigate();
  let location = useLocation();
  const handleLogout = (e) => {
    localStorage.removeItem("blogToken");
    reset()
    showAlert("Logout Successfully.", "success")
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={localStorage.getItem("blogToken") ? "/" : "/login"}>
            <img src={icon} className="mx-3" alt="icon" width="40" />
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
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to={localStorage.getItem("blogToken") ? "/" : "/login"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/profile" ? "active" : ""
                  }`}
                  to={localStorage.getItem("blogToken") ? "/profile " : "/login"}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 py-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary py-1 " type="submit">
                Search
              </button>
            </form>

            {!localStorage.getItem("blogToken") ? (
              <div className="mx-4 my-1 py-1 border-start">
                <div className="mx-3">
                <Link className="btn btn-primary mx-2 py-1" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary mx-0 py-1" to="/signup">
                  Signup
                </Link>
                </div>
              </div>
            ) : (
              <div className="mx-4 my-1 border-start py-1 ">
                <Link
                  className="btn btn-danger mx-4 "
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
