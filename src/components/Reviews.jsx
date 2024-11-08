import React from 'react'
import ReviewsList from './ReviewsList'

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <div className="headline">
          <h2 className="h2">Clients are<br />Loving Our App</h2>
        </div>
 
        <ReviewsList />
      
      </div>
    </section>
  )
}

export default Reviews
