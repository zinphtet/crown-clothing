import React from "react";
import './CheckoutItem.scss'
import deleteCart from "../Reducer/Cart/DeleteCartAction";
import { connect } from "react-redux";
import addToCart from "../Reducer/Cart/AddtoCartAction";
import reduceFromCart from "../Reducer/Cart/reduceCartAction";

const CheckoutItem = ({item,deletThisItem,addtoCart,reduceItem })=>{
    const {name,price,quantity,imageUrl} = item;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>reduceItem(item)}>&#8249;</div>
                <span className="value">{quantity}</span> 
                <div className="arrow" onClick={()=>addtoCart(item)}>&#8250;</div>
            </span>
            <span className="price">${price}</span>
            <span className="remove-button" onClick={()=>deletThisItem(item)} >&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        deletThisItem : (item) => dispatch(deleteCart(item)),
        addtoCart : (item ) => dispatch(addToCart(item)),
        reduceItem : (item) =>dispatch(reduceFromCart(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);