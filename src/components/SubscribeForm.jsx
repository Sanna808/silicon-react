import React, { useState } from 'react'

const SubscribeForm = () => {
  const [formData, setFormData] = useState({email: ''})
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: 'Email is required.'}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach(field => {
      if (formData[field].trim() === '') {
        newErrors[field] = 'Email is required.'
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({email: ''})
    } 
      
  }

  if (submitted) {
    return (
      <div className='informationbox'>
        <h3>Thank you for subscribing to our newsletter!</h3>
      </div>
    )
  }

  return (
  <form className="input-email" onSubmit={handleSubmit} noValidate>
    <div className="input-group">
      <i className="fa-regular fa-envelope icon"></i>
      <input className="form-input email" name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="Your Email" />
      <button className="sub-btn">Subscribe</button>
    </div>
    <span>{errors.email && errors.email}</span>
  </form>
  )
}

export default SubscribeForm
