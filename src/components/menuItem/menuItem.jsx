
import React from "react";
import './menuItem.scss'

const MenuItem= ({title,size,imgUrl})=>{
    return (
        <div className={`${size} menu-item`} >
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