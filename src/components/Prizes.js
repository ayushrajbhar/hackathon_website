import React from 'react'
import '../App.css'

const Prizes = () => {
  return (
    <div className='prizes' id='prizes'>
      <div className="prizes-bg-container">
        <div className="prizes-bg-top"></div>
        <div className="prizes-bg"></div>
        <div className="prizes-bg-bottom"></div>
        <div className="prizes-container">
          <div className="prizes-title">PRIZES</div>

          <div className="prizes-content">
            <div className="prize">
              01st PRIZE: <span>INR 25,000</span>
            </div>
            <div className="prize">
              02nd PRIZE: <span>INR 15,000</span>
            </div>
            <div className="prize">
              03rd PRIZE: <span>INR 10,000</span>
            </div>
            <div className="prize-descp">
              Winning teams at Hackhaven will secure cash prizes, while participants stand to gain vouchers, swag, and every individual will be awarded certificates for their participation.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes
