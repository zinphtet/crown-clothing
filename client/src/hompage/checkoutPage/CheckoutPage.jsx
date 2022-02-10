
import React from "react";
import './CheckoutPage.scss'
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../components/Reducer/Cart/CartSelector";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import { connect } from "react-redux";
import { selectTotalPrice } from "../../components/Reducer/Cart/CartSelector";
import CheckOutButton from "../../components/stripe/stripePayment";

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
             <CheckOutButton price={totalPrice} />

             <div className="payment-card">
                 <h1>* Please use the following test card for payments * 
                     <br/>
                     4242424242424242  Exp - 01/25 : CVC - 123 
                 </h1>
             </div>
         </div>
    )
}

const mapStateToProps =createStructuredSelector({
    checkoutItems : selectCartItems,
    totalPrice : selectTotalPrice,
}) 

export default  connect(mapStateToProps)(CheckoutPage);