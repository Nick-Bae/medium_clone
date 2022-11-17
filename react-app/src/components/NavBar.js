
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"
import "./NavBar.css"

const NavBar = () => {

  const [navBar, setNavBar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })


  return (
    <div className={navBar ? 'navigation-container nav-active' : 'navigation-container'}>
      <div className='nav-bar-container'>
        <div className='nav bar'>
          <div className='navigation-items'>
            <div className='medio-logo'>
              <NavLink to='/' exact={true}>
                <img className="logo" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="logo" />
              </NavLink>
            </div>
            <div className='spacer' />
            <div className='nav-links'>
              <span className='nav-modal-container'>
                <div className='nav-modal'>
                  <p className='modal-login'>
                    <span>
                      <NavLink className='navigation-text' to='/login' exact={true} activeClassName='active'>
                        Sign In
                      </NavLink>
                    </span>
                  </p>
                </div>
              </span>
              <div className='get-started'>
                <span>
                  <NavLink id='get-started-text' to='/sign-up' exact={true} activeClassName='active'>
                    <button id='get__started'>
                      Get Started
                    </button>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
