import React from "react";
import './CartDropdown.scss'
import CustomButton from "../customButton/customButton";
import { connect } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { selectCartItems,selectCartState } from "../Reducer/Cart/CartSelector";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({hidden,cartItems})=>{
   
    return (
        <div className={`cart-dropdown ${hidden ? 'cart-display': ''}`}>
            <div className="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}  />)
                }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector( {
        hidden : selectCartState,
        cartItems : selectCartItems,
    })


export default connect(mapStateToProps)(CartDropdown);