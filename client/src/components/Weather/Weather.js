import React from 'react'
import weatherimg from '../../images/weather.png'
import './Weather.css'

const Weather = () => {
  return (
    <div className="container2">
    <img className="weatherimage" src={weatherimg} alt="" />
    </div>
  )
}

export default Weather