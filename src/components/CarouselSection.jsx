import React from 'react'
import Iphone1 from '../assets/images/iPhone1.svg'
import Iphone2 from '../assets/images/iPhone2.svg'
import Iphone3 from '../assets/images/iPhone3.svg'

const CarouselSection = () => {
  return (
    <section id="carousel-section">
      <div className="container">
        <div className="headline">
          <h2 className="h2">How Does It Work?</h2>
        </div>
        <div className="caurusel">
          <img className="iphone-1" src={Iphone1} alt="iPhone my budget" />
          <img className="iphone-2" src={Iphone2} alt="iPhone my cards" />
          <img className="iphone-3" src={Iphone3} alt="iPhone transfer" />
        </div>
        <div className="bottom">
          <h3>Latest transaction history</h3>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>
      </div>
    </section>
  )
}

export default CarouselSection
