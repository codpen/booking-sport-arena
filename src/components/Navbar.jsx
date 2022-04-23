import React from 'react';
import Button from './Buttons';

export default function Navbar() {
	return (
		<nav className='shadow-md mb-2'>
			<div className='flex justify-between mx-32'>
				<h4 className='my-auto font-bold text-2xl text-teal-500'>
					<a href='/'>Hobiku</a>
				</h4>

				<div className=''>
					<Button variant='solid' link='/login'>
						Login
					</Button>
					<Button variant='outline' link='/Register'>
						Register
					</Button>
				</div>
			</div>
		</nav>
	);
}
