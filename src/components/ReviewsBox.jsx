import React from 'react'
import Quotes from '../assets/images/quotes.svg'
import Rating1 from '../assets/images/rating-1.svg'
import Rating2 from '../assets/images/rating-2.svg'

const ReviewsBox = ({item}) => {

  const images = [Rating1, Rating2];
  images[4] = Rating1;
  images[5] = Rating2;

  return (
  <div className="review"> 
    <div>          
      <img className="img-quotes" src={Quotes} alt="quotes" />
      <img className="rating" src={images[item.starRating]} />
      <p className="lorem">{item.comment}</p>
    </div>
    <div className="bottom">
      <img className="user-1" src={item.avatarUrl}/>  
      <p className="name">{item.author}</p>
      <p className="role">{item.jobRole}</p>
    </div>
  </div>
  )
}

export default ReviewsBox
