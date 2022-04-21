import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children, onScroll }) {
	return (
		<>
			<div className='bg-white' onScroll={onScroll}>
				<Navbar />
				<div className='mx-32'>{children}</div>
			</div>
		</>
	);
}
