import React from 'react';
import './App.css';
import Hompage from './hompage/hompage';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShopPage from './hompage/ShopPage/shoppage';
import Header from './components/header/header';
import AccountPage from './hompage/accountPage/accountPage';
import { checkUserSession } from './components/Reducer/user/userAction';
import { connect } from 'react-redux';
import CheckoutPage from './hompage/checkoutPage/CheckoutPage';
import Collection from './components/collection/collection';
import { selectUserState } from './components/Reducer/user/userSelector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
		// 	if (userAuth) {
		// 		const userRef = await createUserProfileDoc(userAuth);
		// 		userRef.onSnapshot((snapShot) => {
		// 			this.props.dispatchUser({
		// 				id: snapShot.id,
		// 				...snapShot.data(),
		// 			});
		// 		});
		// 	}
		// 	this.props.dispatchUser(userAuth);
		// });
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<Hompage />} />
					<Route path="/shop" element={<ShopPage />}></Route>
					<Route path="/shop/:colRouteName" element={<Collection />} />
					<Route path="/account" element={<AccountPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="*" element={<h3>Comming Soon .... </h3>} />
				</Routes>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	userNow: selectUserState,
	// allCollections: selectShopItems,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
