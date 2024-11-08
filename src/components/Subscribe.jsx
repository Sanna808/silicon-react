import React from 'react'
import Notifications from '../assets/images/notification.svg'
import SubscribeForm from './SubscribeForm'

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

        <SubscribeForm />

      </div>
    </section>
  )
}

export default Subscribe
