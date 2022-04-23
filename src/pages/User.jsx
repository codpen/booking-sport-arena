import React, { useEffect, useState } from 'react';
import Button from '../components/Buttons';
import { InputText } from '../components/InputText';
import Layout from '../components/Layout';
import user from '../assets/user.png';

export default function User() {
	const [fullname, setFullname] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		// get user data
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			{/* v2 using Grid */}
			<Layout>
				<div className='container'>
					<div className='border-2 rounded-2xl p-16 my-5'>
						<div className='grid lg:grid-rows-3 grid-flow-col gap-4'>
							<div className='row-span-3 my-auto text-center'>
								<img
									className='rounded-full mx-auto'
									src={user}
									height={200}
									width={200}
									alt=''
								/>
								<h4 className='text-3xl uppercase'>Username</h4>
								<h4>(Business)</h4>
							</div>
							<div className='col-span-2 grid grid-flow-col my-auto'>
								<h1 className='text-5xl my-auto font-bold uppercase'>
									Profile
								</h1>
								<Button variant='solid'>Become Owner</Button>
							</div>
							<div className='row-span-2 col-span-2'>
								<form className='grid grid-cols-2 gap-4'>
									<div className=''>
										<h6>Fullname</h6>
										<InputText
											type='text'
											placeholder='Fullname'
											value={fullname}
											onChange={(e) =>
												setFullname(e.target.value)
											}
										/>
									</div>
									<div className=''>
										<h6>Nickname</h6>
										<InputText
											type='text'
											placeholder='Nickname'
											value={username}
											onChange={(e) =>
												setUsername(e.target.value)
											}
										/>
									</div>
									<div className=''>
										<h6>Email</h6>
										<InputText
											type='email'
											placeholder='Email'
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>
									<div className=''>
										<h6>Phone Number</h6>
										<InputText
											type='text'
											placeholder='Phone'
											value={phone}
											onChange={(e) =>
												setPhone(e.target.value)
											}
										/>
									</div>
									<div className=''>
										<h6>Password</h6>
										<InputText
											type='password'
											placeholder='Password'
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
									</div>
									<div className='grid justify-items-stretch'>
										<Button
											variant='solid'
											className='uppercase'
											onClick={() => handleSubmit()}>
											Edit profile
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
