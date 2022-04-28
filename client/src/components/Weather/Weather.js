import React from 'react'
import weatherimg from '../../images/weather.png'
import './Weather.css'

const Weather = () => {
  return (
    <img className="weatherimage" src={weatherimg} alt="" />
  )
}

export default Weather