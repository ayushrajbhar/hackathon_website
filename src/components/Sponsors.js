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

    const platinumSponsors = [
        {
            name: 'LAB SYSTEMS',
            img: `${process.env.PUBLIC_URL + '/images/lab systems.png' }`,
            link: 'https://www.labsystems.co.in/'
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

    const silverSponsors = [
        {
            name: 'ACE ECO SYSTEMS',
            img: `${process.env.PUBLIC_URL + '/images/ace eco systems.png' }`,
            link: 'https://m.indiamart.com/aceecosystem/'
        },
        {
            name: 'JK ENTERPRISES',
            img: `${process.env.PUBLIC_URL + '/images/jk enterprises.png' }`,
            link: 'https://jk-enterprises.in/'
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
        <h3 className="sponsor-tier-title">SILVER SPONSORS</h3>
        <div className="sponsor-logos">
            {silverSponsors.map((item, i) => {
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
