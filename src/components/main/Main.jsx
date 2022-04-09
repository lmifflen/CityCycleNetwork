import React from 'react'
import "./Main.css"
import Img2 from "../../images/calgary.jpg";

const Main = () => {
  return (
    <div className='main'>
      <div className='content'>
      <img className="calg" src={Img2} alt="" />
       </div>
  </div>
  )
}

export default Main