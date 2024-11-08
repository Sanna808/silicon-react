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
      
        

        {/* <div className="review-1">
          <div>          
            <img className="img-quotes" src={Quotes} alt="quotes" />
            <img className="rating" src={Rating1} alt="rating four stars" />
            <p className="lorem">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
          </div>
          <div className="bottom">
            <img className="user-1" src={User1} alt="client" />  
            <p className="name">Fannie Summers</p>
            <p className="role">Designer</p>
          </div>
        </div>
        <div className="review-2">
          <img className="img-quotes" src={Quotes} alt="quotes" />
          <img className="rating" src={Rating2} alt="rating five stars" />
          <p className="lorem">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
          <div className="bottom">          
            <img className="user-2" src={User2} alt="client" />  
            <p className="name">Albert Flores</p>
            <p className="role">Developer</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Reviews
