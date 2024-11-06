import React from 'react'
import Notifications from '../assets/images/notification.svg'

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container">

        <div className="notification">
          <img src={Notifications} alt="notification icon" />
        </div>

        <div className="newsletter">
          <h2 className="text-1">Subscribe to our newsletter </h2>
          <h2 className="text-2">Subscribe to our newsletter to stay informed about latest updates</h2>
        </div>
        <div className="input-email">
          <div className="input-group">
            <i className="fa-regular fa-envelope icon"></i>
            <input className="form-input email" type="email" placeholder="Your Email" />
            <button className="sub-btn">Subscribe</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Subscribe
