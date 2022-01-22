import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Hompage from './hompage/hompage';
import { Route, Routes, Link } from 'react-router-dom';
import ShopPage from './hompage/ShopPage/shoppage';

const HatPage = () => {
	return (
		<div>
			<h1>Hat Page</h1>
		</div>
	);
};

function App() {
	return (
		<Routes>
			<Route path="/" element={<Hompage />} />
			<Route path="/shop" element={<ShopPage />} />
		</Routes>
	);
}

export default App;
