import React, { useState } from 'react';
import Layout from '../components/Layout';
import { InputText } from '../components/InputText';
import {
	errorMessage,
	errorMessageSwagger,
	fillAll,
	successMessage,
} from '../functions/Alert';
import Button from '../components/Buttons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Verification() {
	const [business, setBusiness] = useState('');
	const [description, setDescription] = useState('');
	const [certificate, setCertificate] = useState('');
	const navigate = useNavigate();
	document.title = 'Become Owner';

	const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0/owners`;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			business &&
			certificate &&
			business.length > 0 &&
			certificate.length > 0
		) {
			const formData = new FormData();
			formData.append('business_name', business);
			formData.append('business_description', description);
			formData.append('business_certificate', certificate);

			axios
				.put(`${API}/request`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${localStorage.getItem(
							'user-info'
						)}`,
					},
				})
				.then((res) => {
					if (res.status === 200) {
						successMessage(res);
						navigate('/');
					}
				})
				.catch((err) => {
					// errorMessage(err);
					errorMessageSwagger(err);
				});
		} else {
			fillAll();
		}
	};

	return (
		<>
			<Layout>
				<div className='container'>
					<div className='border-2 rounded-2xl p-16 my-5'>
						<h2 className='text-3xl uppercase text-center'>
							Ownership Registration
						</h2>
						<form>
							<div className='my-2'>
								<h6>
									Business Name{' '}
									<strong className='text-amber-500'>
										*
									</strong>
								</h6>
								<InputText
									type='text'
									placeholder='Business Name'
									value={business}
									onChange={(e) =>
										setBusiness(e.target.value)
									}
								/>
							</div>
							<div className='my-2'>
								<h6>Business Description</h6>
								<textarea
									className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
									type='text'
									placeholder='Business Description'
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
									cols='30'
									rows='5'
								/>
							</div>
							<div className='my-2'>
								<h6>
									Business Certificate (Surat Izin Usaha){' '}
									<strong className='text-amber-500'>
										*
									</strong>
								</h6>
								<input
									type='file'
									accept='.pdf'
									className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 justify-center'
									value={certificate}
									onChange={(e) =>
										setCertificate(e.target.value)
									}
								/>
								<h6 className='italic'>
									(max file size: 2 MB)
								</h6>
							</div>
							<p>
								(<strong className='text-amber-500'>*</strong>)
								All the required fields needs to be filled
								correctly.
							</p>

							<div className='my-2'>
								<Button
									type='submit'
									variant='solid'
									className='w-full my-10'
									onClick={handleSubmit}>
									Submit
								</Button>
							</div>
						</form>
					</div>
				</div>
			</Layout>
		</>
	);
}