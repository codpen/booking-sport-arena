import React from 'react';
import Navbar from '../components/Navbar';

export default function User() {
	return (
		<>
			<Navbar />
			<div className='container'>
				<div className='row'>
					<div className='col-start-4'>Logo</div>
					<div className='col-end-8'>
						<h2>Profile</h2>
					</div>
				</div>
			</div>
		</>
	);
}
