import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const CheckOutButton = ({ price }) => {
	const payToStripe = price * 100;
	const API_KEY =
		'pk_test_51KOwhqIFxvhRqGrGsT2CcAdaJRQmPgAd3NE7hfUuNdX1hmtnXvAqRrz8WDsDuQ6odxmDhsoE4iad2GnRay1Tsmk100wFpTlNdS';

	const Token = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: payToStripe,
				token: token,
			},
		})
			.then((response) => {
				alert('succesful payment');
			})
			.catch((error) => {
				console.log('Payment Error: ', error);
				alert(
					'There was an issue with your payment! Please make sure you use the provided credit card.'
				);
			});
	};

	return (
		<StripeCheckout
			image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ioEtMhCjuvZBDiu7VW-7OzhZtb5GZj5Naw&usqp=CAU"
			token={Token}
			stripeKey={API_KEY}
			name="CROWN CLOTHING MM"
			description={`Total Cost $${price}`}
			label="Pay Now !"
			shippingAddress
			billingAddress
			bitcoin
			alipay
			amount={payToStripe}
			panelLabel="Pay Now"
		/>
	);
};

export default CheckOutButton;
