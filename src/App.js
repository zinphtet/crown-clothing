import React from 'react';
import './App.css';
import Hompage from './hompage/hompage';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShopPage from './hompage/ShopPage/shoppage';
import Header from './components/header/header';
import AccountPage from './hompage/accountPage/accountPage';
import { auth, createUserProfileDoc } from '../src/firebase/firebase';
import { setCurrentUser } from './components/Reducer/user/userAction';
import { connect } from 'react-redux';
import CheckoutPage from './hompage/checkoutPage/CheckoutPage';
import Collection from './components/collection/collection';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.props.dispatchUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				this.props.dispatchUser(userAuth);
			}
		});
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
					<Route
						path="*"
						element={<h3>Nothing in this place , wrong directory</h3>}
					/>
				</Routes>
			</div>
		);
	}
}
const mapStateToProps = ({ user }) => ({
	userNow: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	dispatchUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
