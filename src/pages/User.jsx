import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { InputText } from '../components/InputText';
import Button from '../components/Buttons';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../services/Users';
import user from '../assets/user.png';
import axios from 'axios';
import { errorMessage, successMessage, verifyOwner } from '../functions/Alert';

export default function User() {
	const navigate = useNavigate();
	const [fullName, setFullName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [businessName, setBusinessName] = useState('');
	const [profileImage, setProfileImage] = useState('');
	const [userId, setUserId] = useState('');

	const API =
		'https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0/users';

	useEffect(() => {
		fetchUser({
			setFullName,
			setUsername,
			setEmail,
			setPhoneNumber,
			setBusinessName,
			setProfileImage,
			setUserId,
		});
	}, []);

	const updateButton = (e) => {
		e.preventDefault();
		axios
			.put(
				`${API}/${userId}`,
				{
					fullname: fullName,
					username: username,
					email: email,
					phone_number: phoneNumber,
					password: password,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							'user-info'
						)}`,
					},
				}
			)
			.then((res) => {
				successMessage(res);
			})
			.catch((err) => {
				errorMessage(err);
			});
	};

	return (
		<>
			<Layout>
				<div className='container'>
					<div className='border-2 rounded-2xl p-16 my-5'>
						<div className='grid lg:grid-rows-3 grid-flow-col gap-4'>
							<div className='row-span-3 border my-auto rounded-3xl text-center py-20'>
								<img
									className='rounded-full mx-auto'
									// src={profileImage ? profileImage : user}
									src={user}
									height={200}
									width={200}
									alt={profileImage}
								/>
								<h4 className='text-3xl uppercase'>
									{username ? username : 'Username'}
								</h4>
								<h4>
									( {businessName ? businessName : 'Business'}{' '}
									)
								</h4>
							</div>
							<div className='col-span-2 border rounded-3xl grid grid-flow-col py-6 px-10 justify-items-stretch'>
								<h1 className='text-5xl my-auto font-bold uppercase'>
									Profile
								</h1>
								<div className='my-auto justify-self-end'>
									<Button
										variant='solid'
										onClick={() => {
											verifyOwner(navigate);
										}}>
										Become Owner
									</Button>
								</div>
							</div>
							<div className='row-span-2 border col-span-2 rounded-3xl'>
								<form className='grid grid-cols-2 gap-4 px-10 py-5'>
									<div className=''>
										<h6>Fullname</h6>
										<InputText
											type='text'
											placeholder='Your Fullname'
											value={fullName}
											onChange={(e) =>
												setFullName(e.target.value)
											}
										/>
									</div>
									<div className=''>
										<h6>Nickname</h6>
										<InputText
											type='text'
											placeholder='Your Nickname'
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
											placeholder='email@mail.com'
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
											placeholder='+62 812-345-6789'
											value={phoneNumber}
											onChange={(e) =>
												setPhoneNumber(e.target.value)
											}
										/>
									</div>
									<div className=''>
										<h6>Password</h6>
										<InputText
											type='password'
											placeholder='********'
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
									</div>
									<div className='grid justify-items-stretch'>
										<div className='place-self-end'>
											<Button
												variant='solid'
												className='uppercase'
												onClick={(e) =>
													updateButton(e)
												}>
												Update profile
											</Button>
										</div>
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
