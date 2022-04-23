import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Buttons';

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<nav className='shadow-md mb-2'>
			<div className='flex justify-between mx-32'>
				<h4 className='my-auto font-bold text-2xl text-teal-500'>
					<a href='/'>Hobiku</a>
				</h4>

				<div className=''>
					<Button variant='solid' onClick={() => navigate('/login')}>
						Login
					</Button>
					<Button
						variant='outline'
						onClick={() => navigate('/register')}>
						Register
					</Button>
				</div>
			</div>
		</nav>
	);
}
