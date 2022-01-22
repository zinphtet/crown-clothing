
import React from "react";
import './menuItem.scss'

import {NavLink} from 'react-router-dom'

const MenuItem= ({title,size,imgUrl,linkUrl})=>{
    return (
      
            <div className={`${size} menu-item`} >
              
                    <div className="background-image" style={{
                            backgroundImage : `url(${imgUrl})`
                        }}>
                    </div>
                    
                        <div className="content">
                         
                            <h1 className="title">{title.toUpperCase()}</h1>
                            <NavLink to={`/${linkUrl}`} style={{textDecoration:'none'}}>
                              <span className="subtitle">SHOP NOW</span>
                          </NavLink>
                        </div>
                  
                  
            </div>
       
       
    )
}

export default MenuItem;