import React, { useState, useEffect } from 'react'
import ReviewsBox from './ReviewsBox'

const ReviewsList = () => {
  const [reviewsBox, setReviewsBox] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setReviewsBox(data)
  }  
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
  <div className='testimonials'>
      {
        reviewsBox.map((item) => (<ReviewsBox key={item.id} item={item} />))
      }
  </div>
  )
}

export default ReviewsList
