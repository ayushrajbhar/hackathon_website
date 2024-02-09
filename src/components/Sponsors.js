import React from 'react'
import '../App.css'

const Sponsors = () => {
    const platformSponsors = [
        {
            name: 'Devfolio',
            img: `${process.env.PUBLIC_URL + '/images/devfolio.png' }`,
            link: 'https://devfolio.co/discover'
        },
    ]

    const platinumSponsors = [
        {
            name: 'Polygon',
            img: `${process.env.PUBLIC_URL + '/images/polygon.png' }`,
            link: 'https://polygon.technology/'
        },
        {
            name: 'Replit',
            img: `${process.env.PUBLIC_URL + '/images/replit.png' }`,
            link: 'https://replit.com/'
        },
    ]
    
    
  return (
    <div className='sponsors' id='sponsors'>
      <div className="sponsors-title-container">
        <div className="sponsors-title-box">
            <h2 className="sponsors-title">SPONSORS</h2>
        </div>
      </div>
      <div className="sponsor-tier">
        <h3 className="sponsor-tier-title">PLATINUM SPONSORS</h3>
        <div className="sponsor-logos">
            {platinumSponsors.map((item, i) => {
                return (
                    <a href={item.link} target='_blank' rel="noreferrer" key={i}>
                        <img src={item.img} alt={item.name} className="sponsor-logo" />
                    </a>
                )
            })}
        </div>
      </div>
      <div className="sponsor-tier">
        <h3 className="sponsor-tier-title">PLATFORM SPONSOR</h3>
        <div className="sponsor-logos">
            {platformSponsors.map((item, i) => {
                return (
                    <a href={item.link} target='_blank' rel="noreferrer" key={i}>
                        <img src={item.img} alt={item.name} className="sponsor-logo" />
                    </a>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
