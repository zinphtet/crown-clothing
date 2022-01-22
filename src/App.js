import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Hompage from './hompage/hompage';
import { Route, Routes, Link } from 'react-router-dom';
import ShopPage from './hompage/ShopPage/shoppage';
import Header from './components/header/header';
import AccountPage from './hompage/accountPage/accountPage';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Hompage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/account" element={<AccountPage />} />
			</Routes>
		</div>
	);
}

export default App;
