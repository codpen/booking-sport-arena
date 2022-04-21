import React from 'react';
import { OutlineButton, SolidButton } from './Buttons';
import { useNavigate } from 'react-router';

export default function Navbar() {
	const navigate = useNavigate();
	const isLogin = () => {
		if (localStorage.getItem('token')) {
			navigate('/user');
		} else {
			alert('Please Login');
			navigate('/login');
		}
	};

	return (
		<nav>
			<div className='flex justify-between mx-20'>
				<h4 className='my-auto font-bold text-2xl text-teal-500'>
					Hobiku
				</h4>

				<div className=''>
					<SolidButton text='Login' link='/login' onClick={isLogin} />
					<OutlineButton
						text='Register'
						link='/Register'
						onClick={isLogin}
					/>
				</div>
			</div>
		</nav>
	);
}
