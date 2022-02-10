
import React from "react";
import CustomButton from "../customButton/customButton";
import './collectionItem.scss';
import addToCart from "../Reducer/Cart/AddtoCartAction";
import { connect } from "react-redux";

const CollectionItem = ({item,addToCart})=>{
 const {imageUrl,name,price} = item

   return <div className="collection-item">
        <div className="image" style={{backgroundImage : `url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomButton invert onClick={()=>addToCart(item)} >Add to Cart</CustomButton>
    </div> 
}


const mapDispatchToProps = dispatch =>{
    return {
        addToCart : (itemObj) => dispatch(addToCart(itemObj))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);