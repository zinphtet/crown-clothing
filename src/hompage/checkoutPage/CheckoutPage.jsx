
import React from "react";
import './CheckoutPage.scss'
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../components/Reducer/Cart/CartSelector";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import { connect } from "react-redux";
import { selectTotalPrice } from "../../components/Reducer/Cart/CartSelector";

const CheckoutPage = ({checkoutItems,totalPrice })=>{
    return (
         <div className="checkout-page">
             <div className="checkout-header">
                 <div className="header-block">
                     <span>Products</span>
                 </div>
                 <div className="header-block">
                     <span>Description</span>
                 </div>
                 <div className="header-block">
                     <span>Quality</span>
                 </div>
                 <div className="header-block">
                     <span>Price</span>
                 </div>
                 <div className="header-block">
                     <span>Remove</span>
                 </div>
             </div>
             {
              checkoutItems.map (item => <CheckoutItem key={item.id} item={item} />)
             }
             <div className="total">
                 <span>Total : ${totalPrice}</span>
             </div>
         </div>
    )
}

const mapStateToProps =createStructuredSelector({
    checkoutItems : selectCartItems,
    totalPrice : selectTotalPrice,
}) 

export default  connect(mapStateToProps)(CheckoutPage);