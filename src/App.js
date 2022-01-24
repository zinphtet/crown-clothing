import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Hompage from './hompage/hompage';
import { Route, Routes, Link } from 'react-router-dom';
import ShopPage from './hompage/ShopPage/shoppage';
import Header from './components/header/header';
import AccountPage from './hompage/accountPage/accountPage';
import { auth, createUserProfileDoc } from '../src/firebase/firebase';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState(
						{
							currentUser: {
								id: snapShot.id,

								...snapShot.data(),
							},
						},
						() => console.log('Current User : ', this.state)
					);
				});
			} else {
				this.setState({
					currentUser: userAuth,
				});
			}

			// console.log(user.uid);
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route path="/" element={<Hompage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/account" element={<AccountPage />} />
				</Routes>
			</div>
		);
	}
}

export default App;
