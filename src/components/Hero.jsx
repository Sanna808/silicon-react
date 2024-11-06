import React from 'react'
import GooglePlayLight from '../assets/images/googleplay.svg'
import GooglePlayDark from '../assets/images/googleplay-dark.svg'
import AppStoreLight from '../assets/images/appstore.svg'
import AppStoreDark from '../assets/images/appstore-dark.svg'
import IphoneBudget from '../assets/images/iphone-mybudget.svg'
import IphoneCards from '../assets/images/iphone-yourcards.svg'


const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your<br />Money in One App</h1>
        </div>
        <div className="content">
          <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
          <div className="buttons">
            <a className="btn-download-app" href="#">
              <img className="show-light" src={AppStoreLight} alt="appstore" />
              <img className="show-dark" src={AppStoreDark} alt="appstore" />
            </a>
            <a className="btn-download-app" href="#">
              <img className="show-light" src={GooglePlayLight} alt="google play" />
              <img className="show-dark" src={GooglePlayDark} alt="google play" />
            </a>
          </div>

          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>

        <div className="images">
          <img className="img-back" src={IphoneBudget} alt="iphone my budget" />
          <img className="img-front" src={IphoneCards} alt="iphone your cards" />
        </div>
      </div>
    </section>
  )
}

export default Hero
