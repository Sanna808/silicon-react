import React from 'react'
import Icon1 from '../assets/images/icon-1.svg'
import Icon2 from '../assets/images/icon-2.svg'
import Icon3 from '../assets/images/icon-3.svg'
import Icon4 from '../assets/images/icon-4.svg'
import Icon5 from '../assets/images/icon-5.svg'
import Icon6 from '../assets/images/icon-6.png'
import Iphone from '../assets/images/iphone-appfeatures.svg'

const AppFeatures = () => {
  return (
    <section id="app-features">
      <div className="container">

        <div className="image">
          <img src={Iphone} alt="" />
        </div>

        <div className="app">
          <h2 className="h2">App Features</h2>
          <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          <div className="features">

            <div className="box">
              <img className="icon" src={Icon1} alt="icon credit card" />
              <h3>Easy Payments</h3>
              <p className="text-2">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
            <div className="box">
              <img className="icon" src={Icon4} alt="icon shield" />
              <h3>Data Security</h3>
              <p className="text-2">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
            </div>
            <div className="box">
              <img className="icon" src={Icon3} alt="icon diagram" />
              <h3>Cost Statistics</h3>
              <p className="text-2">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
            <div className="box">
              <img className="icon" src={Icon5} alt="icon question mark" />
              <h3>Support 24/7</h3>
              <p className="text-2">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
            <div className="box">
              <img className="icon" src={Icon2} alt="icon wallet" />
              <h3>Regular Cashback</h3>
              <p className="text-2">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
            <div className="box">
              <img className="icon" src={Icon6} alt="icon smiley" />
              <h3>Top Standards</h3>
              <p className="text-2">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default AppFeatures
