import React, { useState, useEffect } from 'react'
import FaqBox from './FaqBox'

const FaqList = () => {
  const [faqBox, setFaqBox] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
    const data = await res.json()
    setFaqBox(data)
  }
 
  useEffect (() => {
    fetchData()
  }, [])

  return (
    <div className="faq">
      {
        faqBox.map((item) => (<FaqBox key={item.id} item={item} />))
      }
  </div>
  )
}

export default FaqList
