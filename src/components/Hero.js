import React from 'react'
import '../App.css'

const Hero = () => {
  return (
    <div className="hero" id='register'>
        <div className="hero-bg"></div>
        {/* <img src={process.env.PUBLIC_URL + '/images/image.jpg'} alt="img" /> */}
        <div className="hero-content">
          <h1 className='hero-title'>HACKHAVEN</h1>
          <div className="hero-text">
            <h2>BY CSI SLRTCE</h2>
            <p>Unleash Your Creativity in the Ultimate Sanctuary of Innovation.</p>
            <div className="register-button-container">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href='https://hackhaven-1.devfolio.co/overview' target='_blank' className='register-button'>Register</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero
