import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Buttons";
import user from '../assets/user.png';

export default function Navbar() {
	const navigate = useNavigate();
	const isLogin = localStorage.getItem('user-info');
	return (
		<nav className='shadow-md mb-2'>
			<div className='flex justify-between mx-32'>
				<h4 className='my-auto font-bold text-2xl text-teal-500 text'>
					<a href='/'>Hobiku</a>
				</h4>

				<Button
					variant='outline'
					className='my-3'
					onClick={() => {
						if (isLogin) {
							navigate('/user');
						} else {
							navigate('/login');
						}
					}}>
					<img src={user} alt='' height={20} width={20} />
				</Button>
			</div>
		</nav>
	);
}
