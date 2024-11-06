import React from 'react'
import Icon1 from '../assets/images/icon-phone.svg'
import Icon2 from '../assets/images/icon-contact.svg'

const FAQ = () => {
  return (
    <section id="questions">
      <div className="container">
        <div className="contact-info">
          <div className="text">
            <h2>Any questions? <br /> Check out the FAQs</h2>
            <p className="text-1">Still have unanswered questions and need to get in touch?</p>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-box-1">
            <img className="image" src={Icon1} alt="phone icon" />
            <p>Still have  questions?</p>
            <a href="#" className="contact-us-1">
              <span>Contact us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="contact-box-1">
            <img className="image" src={Icon2} alt="contact icon" />
            <p>Don't like phone calls?</p>
            <a href="#" className="contact-us-2">
              <span>Contact us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="faq">
          <div className="box-faq">
            <p>Is any of my personal information stored in the App?</p>
            <button className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="box-faq">
            <p>What formats can I download my transaction history in?</p>
            <button className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="box-faq">
            <p>Can I schedule future transfers?</p>
            <button className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="box-faq">
            <p>When can I use Banking App services?</p>
            <button className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="box-faq">
            <p>Can I create my own password that is easy for me to remember?</p>
            <button className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="box-faq">
            <p>What happens if I forget or lose my password?</p>
            <button className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>

        </div>
        <div className="button">
          <a id="contact" href="#" className="btn-primary">
            <span>Contact us now</span>
          </a>
        </div>
      </div>

    </section>
  )
}

export default FAQ
