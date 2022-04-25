import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children, onScroll }) {
	return (
		<>
			<div className='bg-white' onScroll={onScroll}>
				<Navbar />
				<div className='lg:mx-32 md:mx-16 sm:mx-8'>{children}</div>
			</div>
		</>
	);
}
