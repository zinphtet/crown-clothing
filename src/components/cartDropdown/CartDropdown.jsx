import React from "react";
import './CartDropdown.scss'
import CustomButton from "../customButton/customButton";
import { connect } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { selectCartItems,selectCartState } from "../Reducer/Cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import setCartState from "../Reducer/Cart/CartAction";


const CartDropdown = ({hidden,cartItems,dispatch})=>{
    const navigate = useNavigate()
   
    return (
        <div className={`cart-dropdown ${hidden ? 'cart-display': ''}`}>
            <div className="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}  />)
                }
            </div>
            <CustomButton onClick={()=>{
                navigate('/checkout')
                dispatch(setCartState())
                }}>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector( {
        hidden : selectCartState,
        cartItems : selectCartItems,
    })


export default connect(mapStateToProps)(CartDropdown);