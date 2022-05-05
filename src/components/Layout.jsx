import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
	return (
		<>
			<div className="bg-gray-50 overflow-auto h-screen">
				<Navbar />
				<div className="px-8 md:px-10 lg:px-24 xl:px-32 2xl:px-40">
					{children}
				</div>
			</div>
		</>
	);
}
