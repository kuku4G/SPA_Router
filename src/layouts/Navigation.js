import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const list = [
    {name: "Start", path: "/"},
    {name: "Produkty", path: "/products"},
    {name: "Kontakt", path: "/contact"},
    {name: "Panel admina", path: "/admin"},
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
	return (
			<nav className='main'>
				<ul>
					{menu}
				</ul>
			</nav>
	);
};

export default Navigation;
