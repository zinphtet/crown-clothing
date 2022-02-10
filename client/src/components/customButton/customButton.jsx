import React from "react";
import './customButton.scss'

const CustomButton = ({children,isGoogleSignIn,invert,...others})=>(
    <button className={`
    ${invert ? 'invert': ''} 
    ${isGoogleSignIn ? 'google-sign-in': ''}
     custom-button`} 
     {...others}>
      {children}
    </button>
)

export default CustomButton;