import React, { useEffect, useState } from 'react'
import LogoTypeLight from '../assets/images/logo.svg'
import LogoTypeDark from '../assets/images/silicon-dark.svg'


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode')

    if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('preferes-color-scheme : dark').matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleToggle = () => {
    if (isDarkMode) {
      setIsDarkMode(false)
      localStorage.setItem('themeMode', 'light')
      document.documentElement.classList.remove('dark')
    } else {
      setIsDarkMode(true)
      localStorage.setItem('themeMode', 'dark')
      document.documentElement.classList.add('dark')
    }
  }

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
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleToggle} />
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
