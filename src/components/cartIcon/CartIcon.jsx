import React from "react";
import './CartIcon.scss'
import {ReactComponent as ShoppingCart} from '../../assets/shoppingCart.svg'
import setCartState from "../Reducer/Cart/CartAction";
import { connect } from "react-redux";

const CartIcon = ({cartState})=>{
    return (
        <div className="cart-icon">
            <ShoppingCart className="shopping-icon" onClick={()=>cartState()} />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        cartState : ()=>dispatch(setCartState())
    }
}

export default connect(null,mapDispatchToProps)(CartIcon);