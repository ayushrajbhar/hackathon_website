import React from 'react'
import '../App.css'

const Sponsors = () => {
    const platformSponsors = [
        {
            name: 'DEVFOLIO LOGO',
            img: `${process.env.PUBLIC_URL + '/images/devfolio.png' }`,
            link: 'https://devfolio.co'
        },
    ]

    const goldSponsors = [
        {
            name: 'POLYGON LOGO',
            img: `${process.env.PUBLIC_URL + '/images/polygon.png' }`,
            link: 'https://polygon.technology/'
        },
        {
            name: 'ETHINDIA LOGO',
            img: `${process.env.PUBLIC_URL + '/images/ETHIndia.png' }`,
            link: 'https://ethindia.co'
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
        <h3 className="sponsor-tier-title">GOLD SPONSORS</h3>
        <div className="sponsor-logos">
            {goldSponsors.map((item, i) => {
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
