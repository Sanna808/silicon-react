import React from 'react'
import LogoTypeLight from '../assets/images/logo.svg'
import LogoTypeDark from '../assets/images/silicon-dark.svg'


const Header = () => {
  return (
    <header>
      <div className="container">

        <a id="logo" href="index.html">
          <img className="show-light" src={LogoTypeLight} alt="Silicon logotype" />
          <img className="show-dark" src={LogoTypeDark} alt="Silicon logotype" />
        </a>

        <nav id="main-manu" className="navbar">
          <a className="nav-link" href="#">Features</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark Mode</span> 
          <label for="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>

        <button className="btn-mobile">
          <i className="fa-regular fa-bars"></i>
        </button>

      </div>
    </header>
  )
}

export default Header
