import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children, onScroll }) {
	return (
		<>
			<div className="bg-white" onScroll={onScroll}>
				<Navbar />
				<div className="h-screen px-8 md:px-10 lg:px-24">
					{children}
				</div>
			</div>
		</>
	);
}
