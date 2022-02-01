import React from "react";
import './CartIcon.scss'
import {ReactComponent as ShoppingCart} from '../../assets/shoppingCart.svg'
import setCartState from "../Reducer/Cart/CartAction";
import { connect } from "react-redux";


const CartIcon = ({cartState,itemCount})=>{
    return (
        <div className="cart-icon">
            <ShoppingCart className="shopping-icon" onClick={()=>cartState()} />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps =( {cart:{cartItems}}) =>{
    return{
        itemCount : cartItems.reduce((acc,cur)=>{
            return acc + cur.quantity;
        },0)
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        cartState : ()=>dispatch(setCartState())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);