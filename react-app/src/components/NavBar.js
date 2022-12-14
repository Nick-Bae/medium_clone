import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "./NavBar.css";
import LoginFormModal from "./LoginFormModal.js";
import SignupFormModal from "./SignupFormModal.js";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [startedButton, setStartedButton] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavBar(true);
      setStartedButton(true);
    } else {
      setNavBar(false);
      setStartedButton(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={
        navBar ? "navigation-container nav-active" : "navigation-container"
      }
    >
      <div className="nav-bar-container">
        <div className="nav bar">
          <div className="navigation-items">
            <div className="medio-logo">
              <NavLink className="logo-container" to="/" exact={true}>
              <i id="logo"class="fa-brands fa-medium"></i>
              <div className="logo-text">Medio</div>
              </NavLink>
            </div>
            <div className="spacer" />
            <div className="nav-links">
              {/* <span className="nav-modal-container">
                <div className="nav-modal">
                  <p className="modal-login">
                    <span>
                      <NavLink className='navigation-text' to='/login' exact={true} activeClassName='active'>
                        Sign In
                      </NavLink>
                    </span>
                  </p>
                </div>
              </span> */}
              <LoginFormModal nav={false}/>
              <div className="get-started">
                <span>
                  {/* <NavLink
                    className="get-started-text"
                    to="/sign-up"
                    exact={true}
                    activeClassName="active"
                  >
                    <button
                      className={
                        startedButton
                          ? "get-started-button started-active"
                          : "get-started-button"
                      }
                    >
                      Get Started
                    </button>
                  </NavLink> */}
                  <SignupFormModal startedButton={startedButton} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
