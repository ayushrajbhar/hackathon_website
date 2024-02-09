import React from 'react'
import '../App.css'

const Loader = ({setLoading}) => {
  const handleEnd = () => {
    document.querySelector('.loader').style.opacity = 0;
    setTimeout(()=>{
      setLoading(false)
    },500)
  }

  return (
    <div className='loader'>
      <video src={process.env.PUBLIC_URL + '/videos/Hackhaven websitie loader.mp4'} type='mp4' autoPlay muted onEnded={() => handleEnd()} ></video>
    </div>
  )
}

export default Loader
