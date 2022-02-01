import React from "react";
import './CartDropdown.scss'
import CustomButton from "../customButton/customButton";
import { connect } from "react-redux";

const CartDropdown = ({hidden})=>{
    return (
        <div className={`cart-dropdown ${hidden ? 'cart-display': ''}`}>
            <div className="cart-items">
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart:{hidden}}) =>{
    return {
        hidden
    }
}

export default connect(mapStateToProps)(CartDropdown);