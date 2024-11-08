import React, { useState } from 'react'

const SubscribeForm = () => {
  const [formData, setFormData] = useState({email: ''})
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})

    // if (value.trim)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
  <form className="input-email" onSubmit={handleSubmit} noValidate>
    <div className="input-group">
      <i className="fa-regular fa-envelope icon"></i>
      <input className="form-input email" name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="Your Email" />
      <button className="sub-btn">Subscribe</button>
    </div>
  </form>
  )
}

export default SubscribeForm
