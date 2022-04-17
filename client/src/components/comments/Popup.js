import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "./Popup.css"

const Popup = () => {
    const { loginWithRedirect } = useAuth0();
  return (

<div className='pop'>
    <h4>Moj popup</h4>
           
              <button className="btn" onClick={() => loginWithRedirect({})}>
                Log in
              </button>
            
</div>
  )}
export default Popup;