import React, { useState } from 'react'

const FaqBox = ({item}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(open => !open)
  }
  
  
  return (
    <div onClick={toggleOpen} className={`box-faq ${isOpen ? 'open' : ''}`}>
      <div className="question">            
        <p>{item.title}</p>
        <button className="btn-circle">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div className="answer">
        <div className="expandable">{item.content}</div>
      </div>
    </div>
  )
}

export default FaqBox
