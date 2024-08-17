import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ContactPage.css';

const ContactPage = () => {
	const [value, setValue] = useState('');
	const navigate = useNavigate();

	const handleNavigation = () => {
		if (value === '') {
			const confirmed = window.confirm(
				'You have empty message, write something'
			);

			if (!confirmed) {
				return;
			}
		}

		navigate('/contact');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValue('');
		navigate('/contact');
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className='contact'>
			<form onSubmit={handleSubmit}>
				<h3>Send message!</h3>
				<textarea
					placeholder='Your message'
					value={value}
					onChange={handleChange}
				></textarea>
				<button type='submit' onClick={handleNavigation}>
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactPage;
