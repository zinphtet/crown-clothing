import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import { checkUserSession } from './components/Reducer/user/userAction';
import { connect } from 'react-redux';
import { selectUserState } from './components/Reducer/user/userSelector';
import { createStructuredSelector } from 'reselect';
import ErrorBoundary from './components/errorBoundry/ErrorBoundary';

const Hompage = lazy(() => import('./hompage/hompage'));
const ShopPage = lazy(() => import('./hompage/ShopPage/shoppage'));
const Collection = lazy(() => import('./components/collection/collection'));
const AccountPage = lazy(() => import('./hompage/accountPage/accountPage'));
const CheckoutPage = lazy(() => import('./hompage/checkoutPage/CheckoutPage'));

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<ErrorBoundary>
					<Suspense fallback={<div>please wait ...</div>}>
						<Routes>
							<Route path="/" element={<Hompage />} />
							<Route path="/shop" element={<ShopPage />}></Route>
							<Route path="/shop/:colRouteName" element={<Collection />} />
							<Route path="/account" element={<AccountPage />} />
							<Route path="/checkout" element={<CheckoutPage />} />
							<Route path="*" element={<h3>Comming Soon .... </h3>} />
						</Routes>
					</Suspense>
				</ErrorBoundary>
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
