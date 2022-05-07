import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import {
	errorMessage,
	fillAll,
	MuiError,
	successMessage,
} from "../../functions/Alert";
import {
	InputText,
	TextArea,
	RadioCategory,
	InputFile,
} from "../../components/InputText";
import { LayoutOwner } from "../../components/Layout";
import axios from "axios";
import Swal from "sweetalert2";
import { statusLogin, API } from "../../services/Users";

export default function CreateArena() {
	const existedVenue = localStorage.getItem("venue_id");
	// eslint-disable-next-line no-unused-vars
	const [venueId, setVenueId] = useState(existedVenue ? existedVenue : 0);
	const [venueName, setVenueName] = useState("");
	const [details, setDetails] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [imagePreview, setImagePreview] = useState(null);
	const navigate = useNavigate();
	const token = statusLogin();

	useEffect(() => {
		getVenue();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getVenue = async () => {
		await axios
			.get(`${API}/venues/${venueId}`)
			.then((res) => {
				setVenueName(res.data.data.name);
				setDetails(res.data.data.description);
				setAddress(res.data.data.address);
				setCity(res.data.data.city);
				setCategory(res.data.data.category.id);
				setImage(res.data.data.image);
				setImagePreview(res.data.data.image);
				document.title = res.data.data.name
					? `Edit | ${res.data.data.name}`
					: "Create Arena";
			})
			.catch((err) => {
				MuiError(err);
			});
	};

	function createVenue() {
		const formData = new FormData();
		formData.append("venue_name", venueName);
		formData.append("detail", details);
		formData.append("address", address);
		formData.append("city", city);
		formData.append("category_id", category);
		formData.append("venue_photo", image);
		return formData;
	}

	const changeImageButton = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		setImage(file);
		setImagePreview(URL.createObjectURL(file));
	};

	const nextButton = (e) => {
		e.preventDefault();
		if (venueName && address && city && category && image) {
			const formData = createVenue();
			Swal.fire({
				title: "Are you sure?",
				text: "Please make sure all the information is correct",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes",
				cancelButtonText: "No",
			}).then((result) => {
				if (result.value) {
					navigate("/owner/services");
					axios
						.post(`${API}/venues/step1`, formData, {
							headers: {
								"Content-Type": "multipart/form-data",
								Authorization: `Bearer ${token}`,
							},
						})
						.then((res) => {
							successMessage(res);
							navigate("/owner/services");
						})
						.catch((err) => {
							errorMessage(err);
						});
				}
			});
		} else {
			fillAll();
		}
	};

	const updateButton = (e) => {
		e.preventDefault();
		if (venueName && address && city) {
			const arenaUpdate = {
				venue_name: venueName,
				detail: details,
				address: address,
				city: city,
			};
			Swal.fire({
				title: "Are you sure?",
				text: "Please make sure all the information is correct",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes",
				cancelButtonText: "No",
			}).then((result) => {
				if (result.value) {
					axios
						.put(`${API}/venues/step1/${venueId}`, arenaUpdate, {
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${token}`,
							},
						})
						.then((res) => {
							successMessage(res);
							navigate(`/owner/edit/${venueId}/services`);
						})
						.catch((err) => {
							errorMessage(err);
						});
				}
			});
		} else {
			fillAll();
		}
	};

	return (
		<LayoutOwner>
			<form>
				<div className="flex flex-wrap mx-3 mb-6">
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Venue Name (
							<strong className="text-amber-500">*</strong>)
						</h6>
						<InputText
							id="input-arena-name"
							type="text"
							placeholder="Enter venue name"
							value={venueName}
							onChange={(e) => setVenueName(e.target.value)}
						/>
					</div>
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">Detail Venue</h6>
						<TextArea
							id="input-arena-detail"
							placeholder="Enter venue detail"
							value={details}
							onChange={(e) => setDetails(e.target.value)}
						/>
					</div>
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Address (
							<strong className="text-amber-500">*</strong>)
						</h6>
						<div className="flex md:flex-wrap flex-col gap-y-2 md:flex-row md:gap-0">
							<InputText
								id="input-arena-address"
								type="text"
								className="md:w-6/12 px-3"
								placeholder="Jln. "
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
							<div className="md:w-1/12 px-3"></div>
							<InputText
								id="input-arena-city"
								type="text"
								className="md:w-5/12 px-3"
								placeholder="City name"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
					</div>
					{existedVenue === null ? (
						<div className="mb-5 w-full px-3 lg:px-10">
							<h6 className="font-bold my-3">
								Category (
								<strong className="text-amber-500">*</strong>)
							</h6>
							<div className="">
								<RadioCategory
									value={
										category ? category : parseInt(category)
									}
									setValue={setCategory}
								/>
							</div>
						</div>
					) : null}
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Upload Image
							{existedVenue === null && (
								<strong className="text-amber-500">*</strong>
							)}
						</h6>
						<div className="border-2 rounded-md">
							<img
								className="rounded-md mx-auto h-fit"
								src={imagePreview ? imagePreview : image}
								height="100%"
								width="100%"
								alt=""
							/>
							<div className="flex items-center flex-col space-y-5">
								<InputFile
									id="input-arena-image"
									accept="image/png, image/jpeg"
									onChange={(e) => changeImageButton(e)}
								/>
							</div>
						</div>
					</div>
					<p className="w-full px-3 lg:px-10">
						(<strong className="text-amber-500">*</strong>) Please
						make sure you fill all the required fields correctly.
					</p>
					<div className="w-full flex justify-center md:justify-end my-2 lg:mx-10 flex-col lg:flex-row">
						{existedVenue !== null && (
							<Button
								className="w-full md:w-28 my-2"
								onClick={(e) => {
									updateButton(e);
								}}
								variant="warning"
								type="submit"
								id="button-next">
								Update
							</Button>
						)}
						{existedVenue === null && (
							<Button
								className="w-full md:w-28 my-2"
								onClick={(e) => nextButton(e)}
								variant="solid"
								type="submit"
								id="button-next">
								Next
							</Button>
						)}
					</div>
				</div>
			</form>
		</LayoutOwner>
	);
}