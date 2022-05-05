import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { InputText } from "../components/InputText";
import Button from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { fetchUser, statusLogin } from "../services/Users";
import axios from "axios";
import {
	errorMessage,
	fillAll,
	minimumCharacter,
	successMessage,
} from "../functions/Alert";
import Swal from "sweetalert2";
import { ImageDisclosure } from "../components/Disclosure";

export default function User() {
	const navigate = useNavigate();
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [businessName, setBusinessName] = useState("");
	const [image, setImage] = useState("");
	const [imagePreview, setImagePreview] = useState(null);
	const [userId, setUserId] = useState("");
	const [role, setRole] = useState("");
	document.title = "Profile";
	const API = `https://haudhi.site`;

	useEffect(() => {
		fetchUser({
			setFullName,
			setUsername,
			setEmail,
			setPhoneNumber,
			setBusinessName,
			setImage,
			setUserId,
			setRole,
		});
	}, []);

	const updateButton = (e) => {
		e.preventDefault();
		const token = statusLogin();
		if (fullName && username && email && phoneNumber && password === "") {
			fillAll();
		} else if (password.length < 8) {
			minimumCharacter(8);
		} else if (
			fullName &&
			username &&
			email &&
			phoneNumber &&
			password !== ""
		) {
			axios
				.put(
					`${API}/users/${userId}`,
					{
						fullname: fullName,
						username: username,
						email: email,
						phone_number: phoneNumber,
						password: password,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then((res) => {
					successMessage(res);
				})
				.catch((err) => {
					errorMessage(err);
				});
		}
	};

	const changeImageButton = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		setImage(file);
		setImagePreview(URL.createObjectURL(file));
	};

	const onSubmitImage = (e) => {
		e.preventDefault();
		const token = statusLogin();
		const formData = new FormData();
		formData.append("image", image);
		axios
			.put(`${API}/users/image/${userId}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				successMessage(res);
			})
			.catch((err) => {
				errorMessage(err);
			});
	};

	const deleteButton = (e) => {
		const token = statusLogin();
		e.preventDefault();
		Swal.fire({
			position: "center",
			icon: "warning",
			title: "Are you sure?",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
		}).then((result) => {
			if (result.value) {
				axios
					.delete(`${API}/users/${userId}`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					})
					.then((res) => {
						successMessage(res);
						navigate("/");
					})
					.catch((err) => {
						errorMessage(err);
					});
			}
		});
	};

	return (
		<>
			<Layout>
				<div className="container">
					<div className="border-2 rounded-2xl p-8 lg:p-16 my-5">
						<div className="flex flex-col lg:grid lg:flex-none lg:grid-rows-3 lg:grid-flow-col gap-y-4 lg:gap-4 place-content-center">
							<div className="border rounded-3xl text-center lg:hidden py-6 px-10">
								<h1 className="text-3xl font-bold uppercase">
									Profile
								</h1>
							</div>
							<div className="lg:row-span-3 border my-auto rounded-3xl text-center py-10 lg:py-20 px-5 place-self-auto ">
								<div className="flex flex-col justify-center">
									<img
										className="rounded-full mx-auto"
										src={
											imagePreview ? imagePreview : image
										}
										height={200}
										width={200}
										alt="profile pictures"
									/>
									<div className="mb-5">
										<ImageDisclosure
											onChange={changeImageButton}
											onSubmit={onSubmitImage}
										/>
									</div>
									<h4 className="text-lg lg:text-3xl uppercase">
										{username ? username : "Username"}
									</h4>
									{role === "owner" && (
										<h4 className="text-amber-500 font-bold">
											({" "}
											{businessName
												? businessName
												: "Business"}{" "}
											)
										</h4>
									)}
								</div>
							</div>
							<div className="lg:col-span-2 border rounded-3xl lg:grid lg:grid-flow-col py-6 lg:px-10 justify-items-stretch">
								<h1 className="text-5xl hidden lg:grid my-auto font-bold uppercase">
									Profile
								</h1>
								<div className="my-auto flex justify-center">
									<Button
										id="become-owner-button"
										variant="solid"
										onClick={() => {
											navigate("/verify");
										}}>
										Become Owner
									</Button>
								</div>
							</div>
							<div className="row-span-2 border col-span-2 rounded-3xl">
								<form className="flex flex-col md:flex-none md:grid md:grid-cols-2 gap-4 px-5 md:px-10 py-5 content-end">
									<div className="">
										<h6>Fullname</h6>
										<InputText
											id="input-fullname"
											type="text"
											placeholder="Your Fullname"
											value={fullName}
											onChange={(e) =>
												setFullName(e.target.value)
											}
										/>
									</div>
									<div className="">
										<h6>User</h6>
										<InputText
											id="input-username"
											type="text"
											placeholder="Your Username"
											value={username}
											onChange={(e) =>
												setUsername(e.target.value)
											}
										/>
									</div>
									<div className="">
										<h6>Email</h6>
										<InputText
											id="input-email"
											type="email"
											placeholder="email@mail.com"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>
									<div className="">
										<h6>Phone Number</h6>
										<InputText
											id="input-phone"
											type="text"
											placeholder="+62 812-345-6789"
											value={phoneNumber}
											onChange={(e) =>
												setPhoneNumber(e.target.value)
											}
										/>
									</div>
									<div className="">
										<h6>Password</h6>
										<InputText
											id="input-password"
											type="password"
											placeholder="********"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
									</div>
									<div className="grid justify-items-stretch">
										<div className="grid-cols-2 grid gap-4 content-end ">
											<Button
												id="update-profile-button"
												variant="solid"
												className="uppercase"
												onClick={(e) =>
													updateButton(e)
												}>
												Update
											</Button>
											<Button
												id="delete-account-button"
												variant="danger"
												className="uppercase"
												onClick={(e) => {
													deleteButton(e);
												}}>
												Delete
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
