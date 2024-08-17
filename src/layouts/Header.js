import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/Header.css';
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';

const Header = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<img src={header1} alt='city' />} />
				<Route path='/products' element={<img src={header2} alt='city' />} />
				<Route path='/contact' element={<img src={header3} alt='city' />} />
				<Route path='/admin' element={<img src={header1} alt='city' />} />
				<Route path='/login' element={<img src={header2} alt='city' />} />
			</Routes>
		</div>
	);
};

export default Header;
