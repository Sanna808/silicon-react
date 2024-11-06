import React from 'react'
import Check from '../assets/images/bx-check-circle.svg'
import SendMoney from '../assets/images/send-money.svg'
import Payment from '../assets/images/payments.svg'
import Icon1 from '../assets/images/icon-1.svg'
import Icon2 from '../assets/images/icon-2.svg'

const Payments = () => {
  return (
    <section id="payments">
      <div className="container">
        <div className="transfer">
          <h2>Make your money<br />transfer simple and clear</h2>

           <div className="list">
            <img className="check" src={Check} alt="check" />
            <span className="text">Banking transactions are free for you</span>
            <img className="check" src={Check} alt="check" />
            <span className="text">No monthly cash commission</span>
            <img className="check" src={Check} alt="check" />
            <span className="text">Manage payments and transactions online</span>
           </div>

          <a id="learn-more" href="#" className="btn-primary">
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div>
          <img src={SendMoney} alt="send money" />
        </div>

        <div>
          <img src={Payment} alt="" />
        </div>  

        <div className="pay">
          <h2>Receive payment from international bank details</h2>

          <div className="info">
            <img src={Icon1} alt="icon credit card" />
            <img src={Icon2} alt="icon wallet" />
            <p className="text">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            <p className="text">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          </div>

          <a id="learn-more" href="#" className="btn-primary">
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Payments
