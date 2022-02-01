
import React from "react";
import CustomButton from "../customButton/customButton";
import './collectionItem.scss'


const CollectionItem = ({imageUrl,name,price})=>(
    <div className="collection-item">
        <div className="image" style={{backgroundImage : `url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomButton invert>Add to Cart</CustomButton>
    </div> 
)

export default CollectionItem;