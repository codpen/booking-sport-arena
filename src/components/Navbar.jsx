import React from 'react';
import { OutlineButton, SolidButton } from './Buttons';
import { useNavigate } from 'react-router';
import { loginAlert } from '../functions/Alert';

export default function Navbar() {
	const navigate = useNavigate();
	const isLogin = () => {
		if (localStorage.getItem('token')) {
			navigate('/user');
		} else {
			loginAlert(navigate);
		}
	};

	return (
		<nav className='shadow-md mb-2'>
			<div className='flex justify-between mx-32'>
				<h4 className='my-auto font-bold text-2xl text-teal-500'>
					<a href='/'>Hobiku</a>
				</h4>

				<div className=''>
					<SolidButton text='Login' link='/login' onClick={isLogin} />
					<OutlineButton text='Register' link='/Register' />
				</div>
			</div>
		</nav>
	);
}
