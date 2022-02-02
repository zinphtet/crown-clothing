
import React from "react";
import './menuItem.scss'
import {NavLink,useNavigate} from 'react-router-dom'


const MenuItem= ({title,size,imgUrl,linkUrl})=>{
    const navigate = useNavigate()
    return (
      
            <div className={`${size} menu-item`}  onClick={()=>navigate(`/${linkUrl}`)}>
                    <div className="background-image" style={{
                            backgroundImage : `url(${imgUrl})`
                        }}>
                    </div>
                        <div className="content">
                            <h1 className="title">{title.toUpperCase()}</h1>
                             <span className="subtitle">SHOP NOW</span>
                        </div>
            </div>
       
       
    )
}

export default MenuItem;