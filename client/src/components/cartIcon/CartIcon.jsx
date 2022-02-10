import React from "react";
import './CartIcon.scss'
import {ReactComponent as ShoppingCart} from '../../assets/shoppingCart.svg'
import setCartState from "../Reducer/Cart/CartAction";
import { connect } from "react-redux";
import {  selectCartItemsCount } from "../Reducer/Cart/CartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({cartState,itemCount})=>{
    return (
        <div className="cart-icon">
            <ShoppingCart className="shopping-icon" onClick={()=>cartState()} />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
   itemCount : selectCartItemsCount,
})
const mapDispatchToProps = dispatch =>{
    return {
        cartState : ()=>dispatch(setCartState())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);